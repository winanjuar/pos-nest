import { ApiProperty } from '@nestjs/swagger';
import { IsDate, IsOptional } from 'class-validator';
import { PageRequestDto } from 'src/etc/dto/page-request.dto';

export class PageFilterSellDto extends PageRequestDto {
  @ApiProperty({ required: false })
  @IsOptional()
  no_faktur: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsDate()
  tanggal: Date;
}
