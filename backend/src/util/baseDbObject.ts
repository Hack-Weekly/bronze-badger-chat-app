import {classToPlain, Exclude, Expose, Transform} from "class-transformer";
import {IsOptional} from "class-validator";
import mongoose from "mongoose";
import {ApiProperty} from "@nestjs/swagger";

export class BaseDBObject {
    @ApiProperty({type: "string", name: "id"})
    @Expose({ name: 'id' })
    @Transform(({ value }) => value.toString(), { toPlainOnly: true })
    _id: mongoose.Schema.Types.ObjectId;

    @Exclude()
    @IsOptional()
    _v: number;

    @ApiProperty()
    createdAt: Date;

    @ApiProperty()
    updatedAt: Date;

    toJSON() {
        return classToPlain(this);
    }

    toString() {
        return JSON.stringify(this.toJSON());
    }
}