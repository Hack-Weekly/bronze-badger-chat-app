import {INestApplication} from "@nestjs/common";
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

export function useSwagger(app: INestApplication): void {
    const config = new DocumentBuilder()
        .setTitle('Bronze badger AP')
        .setDescription('Team Bronze badger Hack-Weekly API for chat app')
        .setVersion('1.0')
        .addBearerAuth()
        .build();
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api', app, document, {});
}