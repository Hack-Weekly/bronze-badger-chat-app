import {Strategy} from 'passport-local';
import {PassportStrategy} from '@nestjs/passport';
import {Injectable} from '@nestjs/common';
import {AuthService} from '../service/auth.service';
import {User} from "../domain/entity/user";

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
    constructor(private authService: AuthService) {
        super({usernameField: "email"});
    }

    async validate(email: string, password: string): Promise<User> {
        return await this.authService.authorize({
            email,
            password,
        });
    }
}
