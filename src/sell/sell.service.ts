import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateSellDto } from './dto/create-sell.dto';
import { UpdateSellDto } from './dto/update-sell.dto';
import { Sell } from './entities/sell.entity';

@Injectable()
export class SellService {
  constructor(@InjectRepository(Sell) private sellRepo: Repository<Sell>) {}

  async create(createSellDto: CreateSellDto) {
    return await this.sellRepo.save(createSellDto);
  }

  async findAll() {
    return await this.sellRepo.find({ relations: ['user', 'consumen'] });
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
