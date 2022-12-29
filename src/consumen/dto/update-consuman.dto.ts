import { PartialType } from '@nestjs/swagger';
import { CreateConsumanDto } from './create-consuman.dto';

export class UpdateConsumanDto extends PartialType(CreateConsumanDto) {}
