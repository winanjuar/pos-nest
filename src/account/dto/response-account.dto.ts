import { ApiProperty } from '@nestjs/swagger';
import { PageResponseDto } from 'src/etc/dto/page-response.dto';
import { AccountDto } from './account.dto';

export class ResponseAccountDto extends PageResponseDto {
  @ApiProperty({ type: [AccountDto] })
  data: AccountDto[];
}
