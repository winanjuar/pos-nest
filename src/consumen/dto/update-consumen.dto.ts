import { PartialType } from '@nestjs/swagger';
import { ConsumenDto } from './consumen.dto';

export class UpdateConsumenDto extends PartialType(ConsumenDto) {}
