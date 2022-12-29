import { PickType } from '@nestjs/swagger';
import { ProductDto } from './product.dto';

export class ProductIdDto extends PickType(ProductDto, ['id']) {}
