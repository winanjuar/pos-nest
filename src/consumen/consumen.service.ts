import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PageService } from 'src/etc/service/page.service';
import { Repository } from 'typeorm';
import { CreateConsumenDto } from './dto/create-consumen.dto';
import { PageFilterConsumenDto } from './dto/page-filter-consumen.dto';
import { UpdateConsumenDto } from './dto/update-consumen.dto';
import { Consumen } from './entities/consumen.entity';

@Injectable()
export class ConsumenService extends PageService {
  constructor(
    @InjectRepository(Consumen) private consumenRepo: Repository<Consumen>,
  ) {
    super();
  }

  async create(createConsumenDto: CreateConsumenDto) {
    return await this.consumenRepo.save(createConsumenDto);
  }

  async findAll(pageFilter: PageFilterConsumenDto) {
    // return await this.consumenRepo.find({ relations: ['user'] });
    return await this.generatePage(pageFilter, this.consumenRepo);
  }

  async findOne(id: number) {
    return await this.consumenRepo.findOne({ where: { id } });
  }

  async update(id: number, updateConsumenDto: UpdateConsumenDto) {
    const consumen = await this.findOne(id);
    return await this.consumenRepo.save({ ...consumen, ...updateConsumenDto });
  }

  async remove(id: number) {
    const consumen = await this.findOne(id);
    return await this.consumenRepo.remove(consumen);
  }
}
