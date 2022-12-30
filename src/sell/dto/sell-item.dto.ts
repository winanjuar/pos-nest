import { ApiProperty } from '@nestjs/swagger';
import {
  IsNumber,
  IsObject,
  IsOptional,
  Min,
  ValidateNested,
} from 'class-validator';
import { ProductIdDto } from 'src/product/dto/product-id.dto';
import { UserIdDto } from 'src/user/dto/user-id.dto';

export class SellItemDto {
  @IsOptional()
  id: number;

  @ApiProperty()
  @IsNumber()
  @Min(1)
  qty: number;

  @ApiProperty()
  @IsNumber()
  price: number;

  @ApiProperty()
  @IsNumber()
  discount: number;

  @ApiProperty({ type: ProductIdDto })
  @IsObject()
  @ValidateNested()
  product: ProductIdDto;

  @IsObject()
  user: UserIdDto;
}
