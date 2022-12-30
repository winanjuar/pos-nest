import { ApiProperty } from '@nestjs/swagger';
import { IsNumber } from 'class-validator';

export class PageResponseDto {
  @ApiProperty()
  @IsNumber()
  total_data_system: number;

  @ApiProperty()
  @IsNumber()
  total_data_current_page: number;

  @ApiProperty()
  @IsNumber()
  total_pages: number;

  @ApiProperty()
  @IsNumber()
  current_page: number;
}
