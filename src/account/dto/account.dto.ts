import { ApiProperty } from '@nestjs/swagger';
import { IsObject, IsString } from 'class-validator';
import { IsExist } from 'src/etc/validator/exist-validator';
import { User } from 'src/user/entities/user.entity';
import { Account } from '../entities/account.entity';

export class AccountDto {
  @ApiProperty()
  @IsExist([Account, 'id'])
  id: number;

  @ApiProperty()
  @IsString()
  name: string;

  @ApiProperty()
  @IsString()
  description: string;

  @ApiProperty()
  @IsString()
  account_type: string;

  @IsObject()
  user: User;
}
