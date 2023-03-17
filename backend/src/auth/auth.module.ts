import {Module} from '@nestjs/common';
import {MongooseModule} from '@nestjs/mongoose';
import {User, UserSchema} from './domain/entity/user';
import {JwtModule} from '@nestjs/jwt';
import {ConfigService} from '@nestjs/config';
import {AuthService} from './service/auth.service';
import {UsersService} from './service/user.service';
import {LocalStrategy} from './strategy/local.strategy';
import {JwtStrategy} from './strategy/jwt.strategy';
import {PassportModule} from '@nestjs/passport';

@Module({
    imports: [
        MongooseModule.forFeature([{name: User.name, schema: UserSchema}]),
        JwtModule.registerAsync({
            useFactory: (configService: ConfigService) => ({
                secret: configService.get('AT_SECRET'),
                signOptions: {expiresIn: configService.get('AT_EXPIRATION')},
            }),
            inject: [ConfigService],
        }),
        PassportModule,
    ],
    providers: [AuthService, UsersService, LocalStrategy, JwtStrategy],
    exports: [AuthService, UsersService],
})
export class AuthModule {}
