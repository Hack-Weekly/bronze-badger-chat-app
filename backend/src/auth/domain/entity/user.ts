import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import {Document} from 'mongoose';
import {Exclude} from 'class-transformer';

export type UserDocument = User & Document;

@Schema({timestamps: true})
export class User {
    @Prop({required: true})
    username: string;

    @Prop({unique: true, required: true})
    email: string;

    @Prop({required: true})
    @Exclude()
    password: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
