import { PickType } from '@nestjs/swagger';
import { SellDto } from './sell.dto';

export class SellIdDto extends PickType(SellDto, ['id']) {}
