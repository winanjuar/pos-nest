import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PageService } from 'src/etc/service/page.service';
import { Repository } from 'typeorm';
import { CreateAccountDto } from './dto/create-account.dto';
import { PageFilterAccountDto } from './dto/page-filter-account.dto';
import { UpdateAccountDto } from './dto/update-account.dto';
import { Account } from './entities/account.entity';

@Injectable()
export class AccountService extends PageService {
  constructor(
    @InjectRepository(Account) private accountRepo: Repository<Account>,
  ) {
    super();
  }

  async create(createAccountDto: CreateAccountDto) {
    return await this.accountRepo.save(createAccountDto);
  }

  async findAll(pageFilter: PageFilterAccountDto) {
    // return await this.accountRepo.find({ relations: ['user'] });
    return await this.generatePage(pageFilter, this.accountRepo);
  }

  async findOne(id: number) {
    return await this.accountRepo.findOne({ where: { id } });
  }

  async update(id: number, updateAccountDto: UpdateAccountDto) {
    const account = await this.findOne(id);
    return await this.accountRepo.save({ ...account, ...updateAccountDto });
  }

  async remove(id: number) {
    const account = await this.findOne(id);
    return await this.accountRepo.remove(account);
  }
}
