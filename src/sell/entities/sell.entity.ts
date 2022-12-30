import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

import { Consumen } from 'src/consumen/entities/consumen.entity';
import { User } from 'src/user/entities/user.entity';
import { SellItem } from './sell-item.entity';
import { SellPayment } from './sell-payment.entity';

@Entity()
export class Sell {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  no_faktur: string;

  @Column()
  tanggal: Date;

  @Column()
  total_transaction: number;

  @Column()
  total_discount: number;

  @Column()
  total_payment: number;

  @CreateDateColumn()
  create_at: Date;

  @UpdateDateColumn()
  update_at: Date;

  @ManyToOne(() => Consumen, (consumen) => consumen.id)
  consumen: Consumen;

  @OneToMany(() => SellItem, (sellItem) => sellItem.sell)
  items: SellItem[];

  @OneToMany(() => SellPayment, (sellPayment) => sellPayment.sell, {
    cascade: true,
  })
  payments: SellPayment[];

  @ManyToOne(() => User, (user) => user.id)
  user: User;
}
