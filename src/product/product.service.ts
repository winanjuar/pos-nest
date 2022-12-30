import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PageService } from 'src/etc/service/page.service';
import { Repository } from 'typeorm';
import { CreateProductDto } from './dto/create-product.dto';
import { PageFilterProductDto } from './dto/page-filter-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductService extends PageService {
  constructor(
    @InjectRepository(Product) private productRepo: Repository<Product>,
  ) {
    super();
  }

  async create(createProductDto: CreateProductDto) {
    return await this.productRepo.save(createProductDto);
  }

  async findAll(pageFilter: PageFilterProductDto) {
    return await this.generatePage(pageFilter, this.productRepo);
  }

  async findOne(id: number) {
    return await this.productRepo.findOne({ where: { id } });
  }

  async update(id: number, updateProductDto: UpdateProductDto) {
    updateProductDto.id = id;
    return await this.productRepo.save(updateProductDto);
  }

  async remove(id: number) {
    const product = await this.findOne(id);
    return await this.productRepo.remove(product);
  }
}
