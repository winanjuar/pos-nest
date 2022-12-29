import { Module } from '@nestjs/common';
import { ConsumenService } from './consumen.service';
import { ConsumenController } from './consumen.controller';

@Module({
  controllers: [ConsumenController],
  providers: [ConsumenService]
})
export class ConsumenModule {}
