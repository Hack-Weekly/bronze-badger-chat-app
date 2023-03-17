import {PassportStrategy} from '@nestjs/passport';
import {Injectable, UnauthorizedException} from '@nestjs/common';
import {ExtractJwt, Strategy} from 'passport-jwt';
import {ConfigService} from '@nestjs/config';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
    constructor(private configService: ConfigService) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: configService.get('AT_SECRET'),
        });
    }

    async validate(payload: any): Promise<{userId: string; username: string; email: string}> {
        return payload;
        return {
            userId: payload.sub,
            username: payload.username,
            email: payload.email,
        };
    }
}
