import {BaseDBObject} from '../../../util/baseDbObject';
import mongoose, {Document} from 'mongoose';
import {ApiProperty} from '@nestjs/swagger';
import {Prop, SchemaFactory} from '@nestjs/mongoose';

export type ConversationDocument = Conversation & Document;

export class Conversation extends BaseDBObject {
    @ApiProperty()
    @Prop({type: [mongoose.Schema.Types.ObjectId], required: true})
    userIds: mongoose.Schema.Types.ObjectId[];

    constructor(partial: Partial<Conversation>) {
        super();
        Object.assign(this, partial);
    }
}

export const ConversationSchema = SchemaFactory.createForClass(Conversation);
