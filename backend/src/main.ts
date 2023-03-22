import {NestFactory, Reflector} from '@nestjs/core';
import {AppModule} from './app.module';
import {ConfigService} from '@nestjs/config';
import {useRequestLogging} from './util/logger';
import * as mongoose from 'mongoose';
import {BadRequestException, ClassSerializerInterceptor, ValidationPipe} from '@nestjs/common';
import {useSwagger} from "./util/swagger";

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    const configService = app.get(ConfigService);
    const PORT = configService.get<number>('PORT');
    const DEBUG_MODE = configService.get('DEBUG') === 'true';

    mongoose.set('debug', DEBUG_MODE);
    useRequestLogging(app);
    useSwagger(app)

    app.useGlobalPipes(
        new ValidationPipe({
            transform: true,
            exceptionFactory: (errors) => new BadRequestException(errors)
        })
    );

    app.useGlobalInterceptors(
        new ClassSerializerInterceptor(app.get(Reflector))
    );

    app.enableCors();
    await app.listen(PORT);
}
bootstrap();
