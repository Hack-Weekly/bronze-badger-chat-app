import { Module, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { ApiModule } from './api/api.module';
import { IoAdapter } from '@nestjs/platform-socket.io';
import { Server, ServerOptions } from 'socket.io';
import { AppGateway } from './app.gateway';

export class CustomSocketAdapter extends IoAdapter {
  createIOServer(port: number, options?: ServerOptions): Server {
    const server = super.createIOServer(port, options);
    const io = server.of('/api/socket');
    io.origins('*:*');
    return server;
  }
}

// socket.io not implemented 
// the code needs a re-check

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
  providers: [AppGateway],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    // implement middleware here
  }
}
