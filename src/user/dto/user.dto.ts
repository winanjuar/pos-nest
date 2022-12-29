import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, MaxLength, MinLength } from 'class-validator';
import { IsExist } from 'src/etc/validator/exist-validator';
import { IsUnique } from 'src/etc/validator/unique-validator';
import { User } from '../entities/user.entity';

export class UserDto {
  @ApiProperty({ required: true })
  @IsExist([User, 'id'])
  id: number;

  @ApiProperty({ required: true })
  @IsString()
  @MaxLength(200)
  name: string;

  @ApiProperty({ required: true })
  @IsEmail()
  @IsUnique([User, 'email'])
  email: string;

  @ApiProperty({ required: true })
  @IsString()
  @MinLength(6)
  @MaxLength(50)
  @IsUnique([User, 'username'])
  username: string;

  @ApiProperty({ required: true })
  @IsString()
  @MinLength(8)
  @MaxLength(32)
  password: string;
}
