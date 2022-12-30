import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Account } from 'src/account/entities/account.entity';
import { Sell } from './sell.entity';
import { User } from 'src/user/entities/user.entity';

@Entity()
export class SellPayment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  tanggal: Date;

  @Column()
  total: number;

  @ManyToOne(() => Sell, (sell) => sell.id)
  sell: Sell;

  @ManyToOne(() => Account, (account) => account.id)
  account: Account;

  @ManyToOne(() => User, (user) => user.id)
  user: User;

  @CreateDateColumn()
  create_at: Date;

  @UpdateDateColumn()
  update_at: Date;
}
