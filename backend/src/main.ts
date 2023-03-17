import {NestFactory} from '@nestjs/core';
import {AppModule} from './app.module';
import {ConfigService} from '@nestjs/config';
import {useRequestLogging} from './util/logger';
import * as mongoose from 'mongoose';
import {ValidationPipe} from '@nestjs/common';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    const configService = app.get(ConfigService);
    const PORT = configService.get<number>('PORT');
    const DEBUG_MODE = configService.get('DEBUG') === 'true';

    mongoose.set('debug', DEBUG_MODE);
    useRequestLogging(app);

    app.useGlobalPipes(
        new ValidationPipe({
            transform: true,
        })
    );

    await app.listen(PORT);
}
bootstrap();
