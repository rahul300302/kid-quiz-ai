import { Module } from '@nestjs/common';
import { WebhookController } from './webhook.controller';
import { UsersModule } from '../users/users.module';
import { ConfigModule } from '@nestjs/config';

@Module({
    imports: [UsersModule, ConfigModule],
    controllers: [WebhookController],
})
export class WebhookModule { }
