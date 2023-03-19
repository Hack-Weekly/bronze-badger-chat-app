import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import {Document} from 'mongoose';
import {Exclude} from 'class-transformer';
import {BaseDBObject} from "../../../util/baseDbObject";
import {ApiProperty} from "@nestjs/swagger";

export type UserDocument = User & Document;

@Schema({timestamps: true})
export class User extends BaseDBObject{
    @ApiProperty()
    @Prop({required: true})
    username: string;

    @ApiProperty()
    @Prop({unique: true, required: true})
    email: string;

    @Prop({required: true})
    @Exclude()
    password: string;

    constructor(partial: Partial<User>) {
        super();
        Object.assign(this, partial);
    }
}

export const UserSchema = SchemaFactory.createForClass(User);
