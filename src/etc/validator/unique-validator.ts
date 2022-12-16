import { Injectable } from '@nestjs/common';
import {
  registerDecorator,
  ValidationArguments,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import dataSource from 'src/config/data-source.config';

@ValidatorConstraint({ async: true })
@Injectable()
export class UniqueValidator implements ValidatorConstraintInterface {
  async validate(value: any, args: ValidationArguments): Promise<boolean> {
    const targetEntity = args.constraints[0];
    const targetColumn = args.constraints[1];
    const targetValue = args.value;
    const criteria = { [targetColumn]: targetValue };
    const checkExist = await dataSource
      .getRepository(targetEntity)
      .findOne({ where: criteria });
    if (checkExist) return false;
    return true;
  }

  defaultMessage(args: ValidationArguments): string {
    return args.property + ' ' + args.value + ' already used';
  }
}

export function IsUnique(option: any, validationOption?: ValidationOptions) {
  return function (object: any, propertyName: string) {
    registerDecorator({
      name: 'IsUnique',
      target: object.constructor,
      propertyName: propertyName,
      constraints: option,
      options: validationOption,
      validator: UniqueValidator,
      async: true,
    });
  };
}
