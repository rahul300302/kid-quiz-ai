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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClerkAuthGuard = void 0;
const common_1 = require("@nestjs/common");
const clerk_sdk_node_1 = require("@clerk/clerk-sdk-node");
const config_1 = require("@nestjs/config");
let ClerkAuthGuard = class ClerkAuthGuard {
    configService;
    constructor(configService) {
        this.configService = configService;
    }
    async canActivate(context) {
        const req = context.switchToHttp().getRequest();
        const authHeader = req.headers.authorization;
        console.log("🚀 ~ ClerkAuthGuard ~ canActivate ~ secretKey:", this.configService.get('CLERK_SECRET_KEY'));
        if (!authHeader) {
            throw new common_1.UnauthorizedException('Missing Authorization header');
        }
        const token = authHeader.replace('Bearer ', '');
        try {
            const { sub } = await (0, clerk_sdk_node_1.verifyToken)(token, {
                secretKey: this.configService.get('CLERK_SECRET_KEY'),
            });
            req.userId = sub;
            return true;
        }
        catch (err) {
            throw new common_1.UnauthorizedException('Invalid token');
        }
    }
};
exports.ClerkAuthGuard = ClerkAuthGuard;
exports.ClerkAuthGuard = ClerkAuthGuard = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService])
], ClerkAuthGuard);
//# sourceMappingURL=clerkAuthentication.js.map