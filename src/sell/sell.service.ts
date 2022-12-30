import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PageService } from 'src/etc/service/page.service';
import { Repository } from 'typeorm';
import { CreateSellDto } from './dto/create-sell.dto';
import { PageFilterSellDto } from './dto/page-filter-sell.dto';
import { UpdateSellDto } from './dto/update-sell.dto';
import { Sell } from './entities/sell.entity';

@Injectable()
export class SellService extends PageService {
  constructor(@InjectRepository(Sell) private sellRepo: Repository<Sell>) {
    super();
  }

  async create(createSellDto: CreateSellDto) {
    return await this.sellRepo.save(createSellDto);
  }

  async findAll(pageFilter: PageFilterSellDto) {
    // return await this.sellRepo.find({ relations: ['user', 'consumen'] });
    return await this.generatePage(pageFilter, this.sellRepo, {
      relations: [
        'consumen',
        'items',
        'items.product',
        'payments',
        'payments.account',
      ],
    });
  }

  async findOne(id: number) {
    return await this.sellRepo.findOne({
      where: { id },
      relations: [
        'user',
        'consumen',
        'items',
        'items.product',
        'payments',
        'payments.account',
      ],
    });
  }

  async update(id: number, updateSellDto: UpdateSellDto) {
    updateSellDto.id = id;
    return await this.sellRepo.save(updateSellDto);
  }

  async remove(id: number) {
    const sell = await this.sellRepo.findOne({ where: { id } });
    return await this.sellRepo.remove(sell);
  }
}
