import { PickType } from '@nestjs/swagger';
import { ConsumenDto } from './consumen.dto';

export class ConsumenIdDto extends PickType(ConsumenDto, ['id']) {}
