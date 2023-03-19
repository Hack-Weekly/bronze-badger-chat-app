import {Injectable, UnauthorizedException} from '@nestjs/common';
import {UsersService} from './user.service';
import * as bcrypt from 'bcrypt';
import {JwtService} from '@nestjs/jwt';
import {Credentials} from '../domain/dto/credentials';
import {User} from '../domain/entity/user';

@Injectable()
export class AuthService {
    constructor(
        private userService: UsersService,
        private jwtService: JwtService
    ) {}

    async login(user: User): Promise<{access_token: string}> {
        const access_token = this.signAccessToken(user._id.toString(), user.email, user.username);
        return {access_token};
    }

    async authorize({email, password}: Credentials): Promise<User> {
        const user = await this.userService.findUserByEmail(email);

        if(!user) {
            throw new UnauthorizedException();
        }

        const isCorrectPassword = await bcrypt.compare(password, user?.password);

        if(!isCorrectPassword) {
            throw new UnauthorizedException();
        }

        return user;
    }

    signAccessToken(userId: string, email: string, userName: string): string {
        return this.jwtService.sign({
            sub: userId,
            email,
            userName,
        });
    }
}
