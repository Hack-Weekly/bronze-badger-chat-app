import {ValidationError} from "class-validator";
import {ApiProperty} from "@nestjs/swagger";

export class ApiValidationError extends ValidationError {
    @ApiProperty({description: "Object that is being validated"})
    target?: object;
    @ApiProperty({description: "Property that is being validated"})
    property: string;
    @ApiProperty({description: "Value that is being validated"})
    value?: any;
    @ApiProperty({description: "Error messages. Key is constraint name and value is error message."})
    constraints?: {
        [type: string]: string;
    };
    @ApiProperty({type: ApiValidationError, isArray: true, description: "Nested objects validation errors"})
    children?: ApiValidationError[];

    contexts?: {
        [type: string]: any;
    };
}
