import {BadRequestException, Injectable, UnauthorizedException} from '@nestjs/common';
import {UsersService} from './user.service';
import * as bcrypt from 'bcrypt';
import {JwtService} from '@nestjs/jwt';
import {InjectModel} from '@nestjs/mongoose/dist/common';
import {Model} from 'mongoose';
import {Credentials} from '../domain/types/credentials';
import {User, UserDocument} from '../domain/entity/user';

@Injectable()
export class AuthService {
    constructor(
        @InjectModel(User.name)
        private userModel: Model<UserDocument>,
        private userService: UsersService,
        private jwtService: JwtService
    ) {}

    async login(credentials: Credentials): Promise<{access_token: string}> {
        const user = await this.authorize(credentials);

        if (!user) {
            throw new BadRequestException();
        }

        const access_token = this.signAccessToken(user._id, user.email, user.username);

        return {access_token};
    }

    async authorize({email, password}: Credentials): Promise<UserDocument> {
        const user = await this.userService.findUserByEmail(email);

        await bcrypt.compare(password, user?.password).catch(() => {
            throw new UnauthorizedException();
        });

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
