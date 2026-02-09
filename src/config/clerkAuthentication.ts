import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { verifyToken } from '@clerk/clerk-sdk-node';
import { ConfigService } from '@nestjs/config';



@Injectable()
export class ClerkAuthGuard implements CanActivate {
    constructor(private readonly configService: ConfigService) { }
    async canActivate(context: ExecutionContext): Promise<boolean> {
        const req = context.switchToHttp().getRequest();
        const authHeader = req.headers.authorization;
        console.log("🚀 ~ ClerkAuthGuard ~ canActivate ~ secretKey:", this.configService.get('CLERK_SECRET_KEY'))

        if (!authHeader) {
            throw new UnauthorizedException('Missing Authorization header');
        }

        const token = authHeader.replace('Bearer ', '');

        try {
            const { sub } = await verifyToken(token, {
                secretKey: this.configService.get('CLERK_SECRET_KEY'),
            });

            req.userId = sub; // attach clerk user id
            return true;
        } catch (err) {
            throw new UnauthorizedException('Invalid token');
        }
    }
}
