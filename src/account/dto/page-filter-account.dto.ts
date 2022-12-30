import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';
import { PageRequestDto } from 'src/etc/dto/page-request.dto';

export class PageFilterAccountDto extends PageRequestDto {
  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  name: string;
}
