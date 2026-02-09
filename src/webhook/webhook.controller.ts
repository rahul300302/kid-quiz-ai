import { Controller, Post, Headers, Body, BadRequestException } from '@nestjs/common';
import { Webhook } from 'svix';
import { UsersService } from '../users/users.service';
import { ConfigService } from '@nestjs/config';

@Controller('webhook')
export class WebhookController {
    constructor(
        private readonly usersService: UsersService,
        private readonly configService: ConfigService,
    ) { }

    @Post('create-user')
    async handleUserCreate(
        @Headers('svix-id') svix_id: string,
        @Headers('svix-timestamp') svix_timestamp: string,
        @Headers('svix-signature') svix_signature: string,
        @Body() payload: any,
    ) {
        console.log("hihihihihiihi");

        if (!svix_id || !svix_timestamp || !svix_signature) {
            throw new BadRequestException('Missing svix headers');
        }

        const WEBHOOK_SECRET = this.configService.get<string>('CLERK_WEBHOOK_SECRET');
        console.log("WEBHOOK_SECRET", WEBHOOK_SECRET);
        if (!WEBHOOK_SECRET) {
            throw new Error('Please add CLERK_WEBHOOK_SECRET to .env or .env.local');
        }

        const wh = new Webhook(WEBHOOK_SECRET);
        let evt: any;

        try {
            evt = wh.verify(JSON.stringify(payload), {
                'svix-id': svix_id,
                'svix-timestamp': svix_timestamp,
                'svix-signature': svix_signature,
            });
        } catch (err) {
            console.error('Error verifying webhook:', err);
            throw new BadRequestException('Error verifying webhook');
        }
        return true
        const { id, email_addresses, first_name, last_name, image_url, ...attributes } = evt.data;
        const eventType = evt.type;

        if (eventType === 'user.created') {
            const email = email_addresses && email_addresses.length > 0 ? email_addresses[0].email_address : '';
            const name = `${first_name || ''} ${last_name || ''}`.trim();

            await this.usersService.upsertUserFromWebhook({
                clerkId: id,
                email,
                name,
                avatarUrl: image_url,
            });
            return { success: true, message: 'User created' };

        }

        return { success: true, message: 'Unhandled event type' };
    }
}
