import {BaseDBObject} from '../../../util/baseDbObject';
import mongoose, {Document} from 'mongoose';
import {ApiProperty} from '@nestjs/swagger';
import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';

export type ConversationUserMetaDocument = ConversationUserMeta & Document;

@Schema({timestamps: true})
export class ConversationUserMeta extends BaseDBObject {
    @ApiProperty()
    @Prop({required: true})
    conversationId: mongoose.Schema.Types.ObjectId;

    @ApiProperty()
    @Prop({default: false})
    typing: boolean;

    @ApiProperty()
    @Prop({required: true})
    userId: mongoose.Schema.Types.ObjectId;
}

export const ConversationUserMetaSchema = SchemaFactory.createForClass(ConversationUserMeta);
