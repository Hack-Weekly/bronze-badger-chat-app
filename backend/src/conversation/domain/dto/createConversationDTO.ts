import {ApiProperty} from '@nestjs/swagger';
import {Transform} from 'class-transformer';
import {Types} from 'mongoose';
import {IsMongoIdObject} from '../../../validator/isMongoObjectId';

export class CreateConversationDto {
    @ApiProperty()
    @IsMongoIdObject({each: true})
    @Transform((value) => {
        return value.value.map((id) => {
            if (Types.ObjectId.isValid(id)) {
                return new Types.ObjectId(id);
            }

            return id;
        });
    })
    userIds: Types.ObjectId[];
}
