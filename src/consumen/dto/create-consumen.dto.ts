import { OmitType } from '@nestjs/swagger';
import { ConsumenDto } from './consumen.dto';

export class CreateConsumenDto extends OmitType(ConsumenDto, ['id']) {}
