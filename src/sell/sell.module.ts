import { Module } from '@nestjs/common';
import { SellService } from './sell.service';
import { SellController } from './sell.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Sell } from './entities/sell.entity';
import { SellItem } from './entities/sell-item.entity';
import { SellPayment } from './entities/sell-payment.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Sell, SellItem, SellPayment])],
  controllers: [SellController],
  providers: [SellService],
})
export class SellModule {}
