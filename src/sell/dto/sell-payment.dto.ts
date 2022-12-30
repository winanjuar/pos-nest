import { ApiProperty } from '@nestjs/swagger';
import {
  IsDate,
  IsNumber,
  IsObject,
  IsOptional,
  ValidateNested,
} from 'class-validator';
import { AccountIdDto } from 'src/account/dto/account-id.dto';
import { UserIdDto } from 'src/user/dto/user-id.dto';

export class SellPaymentDto {
  @IsOptional()
  id: number;

  @ApiProperty()
  @IsDate()
  tanggal: Date;

  @ApiProperty()
  @IsNumber()
  total: number;

  @ApiProperty({ type: AccountIdDto })
  @IsObject()
  @ValidateNested()
  account: AccountIdDto;

  @IsObject()
  user: UserIdDto;
}
