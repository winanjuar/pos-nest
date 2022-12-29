import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(@InjectRepository(User) private userRepo: Repository<User>) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    createUserDto.password = await this.hash(createUserDto.password);
    return await this.userRepo.save(createUserDto);
  }

  async findAll(): Promise<User[]> {
    return await this.userRepo.find();
  }

  async findOne(id: number): Promise<User> {
    return await this.userRepo.findOne({ where: { id } });
  }

  async findUsername(username: string): Promise<User> {
    return await this.userRepo.findOne({
      select: ['id', 'username', 'password'],
      where: { username },
    });
  }

  async update(id: number, updateUserDto: UpdateUserDto): Promise<User> {
    const user = await this.findOne(id);
    if (updateUserDto.password) {
      updateUserDto.password = await this.hash(updateUserDto.password);
    }
    return await this.userRepo.save({ ...user, ...updateUserDto });
  }

  async remove(id: number): Promise<User> {
    const user = await this.findOne(id);
    return this.userRepo.remove(user);
  }

  async hash(plainPassword: string): Promise<string> {
    const hash = await bcrypt.hash(plainPassword, 10);
    return hash;
  }

  async compare(plainPassword: string, hash: string): Promise<boolean> {
    const valid = await bcrypt.compare(plainPassword, hash);
    return valid;
  }
}
