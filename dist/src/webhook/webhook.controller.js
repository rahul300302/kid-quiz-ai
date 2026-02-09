"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebhookController = void 0;
const common_1 = require("@nestjs/common");
const svix_1 = require("svix");
const users_service_1 = require("../users/users.service");
const config_1 = require("@nestjs/config");
let WebhookController = class WebhookController {
    usersService;
    configService;
    constructor(usersService, configService) {
        this.usersService = usersService;
        this.configService = configService;
    }
    async handleUserCreate(svix_id, svix_timestamp, svix_signature, payload) {
        console.log("hihihihihiihi");
        if (!svix_id || !svix_timestamp || !svix_signature) {
            throw new common_1.BadRequestException('Missing svix headers');
        }
        const WEBHOOK_SECRET = this.configService.get('CLERK_WEBHOOK_SECRET');
        console.log("WEBHOOK_SECRET", WEBHOOK_SECRET);
        if (!WEBHOOK_SECRET) {
            throw new Error('Please add CLERK_WEBHOOK_SECRET to .env or .env.local');
        }
        const wh = new svix_1.Webhook(WEBHOOK_SECRET);
        let evt;
        try {
            evt = wh.verify(JSON.stringify(payload), {
                'svix-id': svix_id,
                'svix-timestamp': svix_timestamp,
                'svix-signature': svix_signature,
            });
        }
        catch (err) {
            console.error('Error verifying webhook:', err);
            throw new common_1.BadRequestException('Error verifying webhook');
        }
        return true;
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
};
exports.WebhookController = WebhookController;
__decorate([
    (0, common_1.Post)('create-user'),
    __param(0, (0, common_1.Headers)('svix-id')),
    __param(1, (0, common_1.Headers)('svix-timestamp')),
    __param(2, (0, common_1.Headers)('svix-signature')),
    __param(3, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, Object]),
    __metadata("design:returntype", Promise)
], WebhookController.prototype, "handleUserCreate", null);
exports.WebhookController = WebhookController = __decorate([
    (0, common_1.Controller)('webhook'),
    __metadata("design:paramtypes", [users_service_1.UsersService,
        config_1.ConfigService])
], WebhookController);
//# sourceMappingURL=webhook.controller.js.map