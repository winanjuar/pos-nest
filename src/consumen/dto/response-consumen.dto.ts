import { ApiProperty } from '@nestjs/swagger';
import { PageResponseDto } from 'src/etc/dto/page-response.dto';
import { ConsumenDto } from './consumen.dto';

export class ResponseConsumenDto extends PageResponseDto {
  @ApiProperty({ type: [ConsumenDto] })
  data: ConsumenDto[];
}
