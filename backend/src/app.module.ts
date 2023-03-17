import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {MongooseModule} from '@nestjs/mongoose';
import {ConfigModule, ConfigService} from '@nestjs/config';
import {AuthModule} from './auth/auth.module';
import {ApiModule} from './api/api.module';

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
            envFilePath: [`env/.${process.env.NODE_ENV}.env`],
        }),
        MongooseModule.forRootAsync({
            useFactory: async (configService: ConfigService) => ({
                uri: configService.get('DATABASE_URL'),
            }),
            inject: [ConfigService],
        }),
        AuthModule,
        ApiModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
