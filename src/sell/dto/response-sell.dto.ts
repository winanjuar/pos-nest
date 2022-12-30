import { ApiProperty } from '@nestjs/swagger';
import { PageResponseDto } from 'src/etc/dto/page-response.dto';
import { SellDto } from './sell.dto';

export class ResponseSellDto extends PageResponseDto {
  @ApiProperty({ type: [SellDto] })
  data: SellDto[];
}
