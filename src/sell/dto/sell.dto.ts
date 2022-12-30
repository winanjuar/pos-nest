import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsArray,
  IsDate,
  IsNumber,
  IsObject,
  IsString,
  ValidateNested,
} from 'class-validator';
import { ConsumenIdDto } from 'src/consumen/dto/consumen-id.dto';
import { IsExist } from 'src/etc/validator/exist-validator';
import { IsUnique } from 'src/etc/validator/unique-validator';
import { UserIdDto } from 'src/user/dto/user-id.dto';
import { SellItem } from '../entities/sell-item.entity';
import { SellPayment } from '../entities/sell-payment.entity';
import { Sell } from '../entities/sell.entity';
import { SellItemDto } from './sell-item.dto';
import { SellPaymentDto } from './sell-payment.dto';

export class SellDto {
  @ApiProperty()
  @IsExist([Sell, 'id'])
  id: number;

  @ApiProperty()
  @IsString()
  @IsUnique([Sell, 'no_faktur'])
  no_faktur: string;

  @ApiProperty()
  @IsDate()
  tanggal: Date;

  @IsNumber()
  total_transaction: number;

  @IsNumber()
  total_discount: number;

  @IsNumber()
  total_payment: number;

  @ApiProperty({ type: ConsumenIdDto })
  @ValidateNested()
  @IsObject()
  consumen: ConsumenIdDto;

  @ApiProperty({ type: [SellItemDto] })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => SellItemDto)
  items: SellItem[];

  @ApiProperty({ type: [SellPaymentDto] })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => SellPaymentDto)
  payments: SellPayment[];

  @IsObject()
  user: UserIdDto;
}
