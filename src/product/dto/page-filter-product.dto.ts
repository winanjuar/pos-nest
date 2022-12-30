import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsOptional, IsString } from 'class-validator';
import { PageRequestDto } from 'src/etc/dto/page-request.dto';

export class PageFilterProductDto extends PageRequestDto {
  @ApiProperty({ required: false })
  @IsOptional()
  barcode: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  name: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  description: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsNumber()
  buy_price: number;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsNumber()
  sell_price: number;
}
