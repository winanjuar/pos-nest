import {
  Controller,
  Get,
  Post,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
  UseGuards,
  UseInterceptors,
  UploadedFile,
} from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ApiBearerAuth, ApiBody, ApiConsumes, ApiTags } from '@nestjs/swagger';
import { JwtGuard } from 'src/auth/jwt.guard';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { InjectUser } from 'src/etc/decorator/inject-user.decorator';
import { extname } from 'path';

@ApiTags('Product')
@ApiBearerAuth()
@UseGuards(JwtGuard)
@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @ApiConsumes('multipart/form-data')
  @ApiBody({ type: CreateProductDto })
  @UseInterceptors(
    FileInterceptor('photo', {
      storage: diskStorage({
        destination: './assets/products',
        filename: (req: any, file, cb) => {
          const namaFile = [req.user.id, Date.now()].join('-');
          cb(null, namaFile + extname(file.originalname));
        },
      }),
    }),
  )
  @Post()
  async create(
    @InjectUser() createProductDto: CreateProductDto,
    @UploadedFile() photo: Express.Multer.File,
  ) {
    createProductDto.photo = photo.filename;
    return await this.productService.create(createProductDto);
  }

  @Get()
  async findAll() {
    return await this.productService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return await this.productService.findOne(id);
  }

  @ApiConsumes('multipart/form-data')
  @ApiBody({ type: UpdateProductDto })
  @UseInterceptors(
    FileInterceptor('photo', {
      storage: diskStorage({
        destination: './assets/products',
        filename: (req: any, file, cb) => {
          const namaFile = [req.user.id, Date.now()].join('-');
          cb(null, namaFile + extname(file.originalname));
        },
      }),
    }),
  )
  @Patch(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @InjectUser() updateProductDto: UpdateProductDto,
    @UploadedFile() photo: Express.Multer.File,
  ) {
    if (photo) {
      updateProductDto.photo = photo.filename;
    }
    return await this.productService.update(id, updateProductDto);
  }

  @Delete(':id')
  async remove(@Param('id', ParseIntPipe) id: number) {
    return await this.productService.remove(id);
  }
}
