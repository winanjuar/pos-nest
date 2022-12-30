import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { dataSourceOptions } from './config/data-source.config';
import { UniqueValidator } from './etc/validator/unique-validator';
import { ExistValidator } from './etc/validator/exist-validator';
import { AuthModule } from './auth/auth.module';
import { ProductModule } from './product/product.module';
import { ConsumenModule } from './consumen/consumen.module';
import { AccountModule } from './account/account.module';
import { SellModule } from './sell/sell.module';
import { PageService } from './etc/service/page.service';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot(dataSourceOptions),
    UserModule,
    AuthModule,
    ProductModule,
    ConsumenModule,
    AccountModule,
    SellModule,
  ],
  controllers: [AppController],
  providers: [AppService, UniqueValidator, ExistValidator, PageService],
})
export class AppModule {}
