import {BaseDBObject} from '../../../util/baseDbObject';
import mongoose, {Document} from 'mongoose';
import {ApiProperty} from '@nestjs/swagger';
import {Prop, SchemaFactory} from '@nestjs/mongoose';

export type MessageDocument = Message & Document;

export class Message extends BaseDBObject {
    @ApiProperty()
    @Prop({required: true})
    conversationId: mongoose.Schema.Types.ObjectId;

    @ApiProperty()
    @Prop({required: true})
    userId: mongoose.Schema.Types.ObjectId;

    @ApiProperty()
    @Prop({required: true})
    data: string;

    constructor(partial: Partial<Message>) {
        super();
        Object.assign(this, partial);
    }
}

export const MessageSchema = SchemaFactory.createForClass(Message);
