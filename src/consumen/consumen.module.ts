import { Module } from '@nestjs/common';
import { ConsumenService } from './consumen.service';
import { ConsumenController } from './consumen.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Consumen } from './entities/consumen.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Consumen])],
  controllers: [ConsumenController],
  providers: [ConsumenService],
})
export class ConsumenModule {}
