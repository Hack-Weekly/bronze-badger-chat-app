import {Module} from '@nestjs/common';
import {MongooseModule} from '@nestjs/mongoose';
import {ConfigModule, ConfigService} from '@nestjs/config';
import {AuthModule} from './auth/auth.module';
import {ApiModule} from './api/api.module';
import {ConversationModule} from './conversation/conversation.module';

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
        ApiModule,
        AuthModule,
        ConversationModule,
    ],
})
export class AppModule {}
