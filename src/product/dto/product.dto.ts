import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsObject, IsOptional, IsString } from 'class-validator';
import { IsExist } from 'src/etc/validator/exist-validator';
import { IsUnique } from 'src/etc/validator/unique-validator';
import { UserDto } from 'src/user/dto/user.dto';
import { Product } from '../entities/product.entity';

export class ProductDto {
  @ApiProperty()
  @IsExist([Product, 'id'])
  id: number;

  @ApiProperty()
  @IsString()
  @IsUnique([Product, 'barcode'])
  barcode: string;

  @ApiProperty()
  @IsString()
  name: string;

  @ApiProperty()
  @IsString()
  description: string;

  @ApiProperty()
  @IsNumber()
  buy_price: number;

  @ApiProperty()
  @IsNumber()
  sell_price: number;

  @ApiProperty({ format: 'binary' })
  @IsOptional()
  photo: string;

  @IsObject()
  user: UserDto;
}
