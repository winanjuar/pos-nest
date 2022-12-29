import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsObject, IsString } from 'class-validator';
import { IsExist } from 'src/etc/validator/exist-validator';
import { UserDto } from 'src/user/dto/user.dto';
import { Consumen } from '../entities/consumen.entity';

export class ConsumenDto {
  @ApiProperty()
  @IsExist([Consumen, 'id'])
  @IsNumber()
  id: number;

  @ApiProperty()
  @IsString()
  name: string;

  @ApiProperty()
  @IsString()
  address: string;

  @ApiProperty()
  @IsString()
  email: string;

  @ApiProperty()
  @IsString()
  phone: string;

  @IsObject()
  user: UserDto;
}
