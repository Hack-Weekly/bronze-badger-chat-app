import {registerDecorator, ValidationArguments, ValidationOptions} from 'class-validator';
import {Types} from 'mongoose';

export function IsMongoIdObject(validationOptions?: ValidationOptions) {
    return function (object: Object, propertyName: string) {
        registerDecorator({
            name: 'IsMongoObjectId',
            target: object.constructor,
            propertyName: propertyName,
            constraints: [],
            options: validationOptions,
            validator: {
                validate(value: any, args: ValidationArguments) {
                    return Types.ObjectId.isValid(value);
                },
                defaultMessage(validationArguments?: ValidationArguments): string {
                    if (validationOptions.each) {
                        return validationArguments.property + ' contains invalid ObjectId!';
                    }

                    return validationArguments.property + ' is not a valid ObjectId!';
                },
            },
        });
    };
}
