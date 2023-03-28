import {ApiProperty} from '@nestjs/swagger';
import {IsString} from 'class-validator';

export class CreateMessageDTO {
    @ApiProperty()
    @IsString()
    conversationId: string;

    @ApiProperty()
    @IsString()
    data: string;
}
