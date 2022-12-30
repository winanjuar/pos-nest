import { OmitType } from '@nestjs/swagger';
import { SellDto } from './sell.dto';

export class CreateSellDto extends OmitType(SellDto, ['id']) {}
