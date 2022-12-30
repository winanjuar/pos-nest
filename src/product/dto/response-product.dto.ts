import { ApiProperty } from '@nestjs/swagger';
import { PageResponseDto } from 'src/etc/dto/page-response.dto';
import { ProductDto } from './product.dto';

export class ResponseProductDto extends PageResponseDto {
  @ApiProperty({ type: [ProductDto] })
  data: ProductDto[];
}
