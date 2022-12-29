import { Injectable } from '@nestjs/common';
import { CreateConsumanDto } from './dto/create-consuman.dto';
import { UpdateConsumanDto } from './dto/update-consuman.dto';

@Injectable()
export class ConsumenService {
  create(createConsumanDto: CreateConsumanDto) {
    return 'This action adds a new consuman';
  }

  findAll() {
    return `This action returns all consumen`;
  }

  findOne(id: number) {
    return `This action returns a #${id} consuman`;
  }

  update(id: number, updateConsumanDto: UpdateConsumanDto) {
    return `This action updates a #${id} consuman`;
  }

  remove(id: number) {
    return `This action removes a #${id} consuman`;
  }
}
