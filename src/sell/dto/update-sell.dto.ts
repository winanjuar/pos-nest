import { PartialType } from '@nestjs/swagger';
import { SellDto } from './sell.dto';

export class UpdateSellDto extends PartialType(SellDto) {}
