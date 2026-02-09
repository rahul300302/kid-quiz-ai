import { UsersService } from '../users/users.service';
import { ConfigService } from '@nestjs/config';
export declare class WebhookController {
    private readonly usersService;
    private readonly configService;
    constructor(usersService: UsersService, configService: ConfigService);
    handleUserCreate(svix_id: string, svix_timestamp: string, svix_signature: string, payload: any): Promise<true | {
        success: boolean;
        message: string;
    }>;
}
