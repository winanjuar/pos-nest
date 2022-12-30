import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsOptional, IsString } from 'class-validator';
import { PageRequestDto } from 'src/etc/dto/page-request.dto';

export class PageFilterConsumenDto extends PageRequestDto {
  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  name: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  address: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  email: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsNumber()
  phone: string;
}
