import {ApiProperty} from "@nestjs/swagger";
import {ApiValidationError} from "./apiValidationError";

export class ValidationErrorResponse {
    @ApiProperty({default: 400})
    statusCode: 400;
    @ApiProperty({type: ApiValidationError, isArray: true})
    message: ApiValidationError[];
    @ApiProperty({default: "Bad Request"})
    error: "Bad Request";
}