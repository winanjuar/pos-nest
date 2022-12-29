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
export class ExistValidator implements ValidatorConstraintInterface {
  async validate(value: any, args: ValidationArguments): Promise<boolean> {
    const targetEntity = args.constraints[0];
    const targetColumn = args.constraints[1];
    const criteria = { [targetColumn]: value };
    const checkExist = await dataSource
      .getRepository(targetEntity)
      .findOne({ where: criteria });
    if (checkExist) return true;
    return false;
  }

  defaultMessage(args: ValidationArguments): string {
    return args.property + ' ' + args.value + ' not found';
  }
}

export function IsExist(option: any, validationOption?: ValidationOptions) {
  return function (object: any, propertyName: string) {
    registerDecorator({
      name: 'IsExist',
      target: object.constructor,
      propertyName: propertyName,
      constraints: option,
      options: validationOption,
      validator: ExistValidator,
      async: true,
    });
  };
}
