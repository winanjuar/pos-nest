import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateAccountDto } from './dto/create-account.dto';
import { UpdateAccountDto } from './dto/update-account.dto';
import { Account } from './entities/account.entity';

@Injectable()
export class AccountService {
  constructor(
    @InjectRepository(Account) private accountRepo: Repository<Account>,
  ) {}

  async create(createAccountDto: CreateAccountDto) {
    return await this.accountRepo.save(createAccountDto);
  }

  async findAll() {
    return await this.accountRepo.find({ relations: ['user'] });
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
