import {ApiProperty} from "@nestjs/swagger";
import {IsEmail, IsString, MaxLength, MinLength} from "class-validator";
import {Match} from "../../../validator/match";

export class CreateUserDto {
    @ApiProperty({minimum: 6, maximum: 14})
    @IsString()
    @MinLength(6, {})
    @MaxLength(14)
    username: string

    @ApiProperty()
    @IsEmail()
    email: string

    @ApiProperty({minimum: 8})
    @IsString()
    @MinLength(8)
    password: string

    @ApiProperty()
    @IsString()
    @MinLength(8)
    @Match('password', {message: "passwordRepeat does not match password!"})
    passwordRepeat: string
}
