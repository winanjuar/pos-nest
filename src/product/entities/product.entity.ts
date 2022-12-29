import { User } from 'src/user/entities/user.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  barcode: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  buy_price: number;

  @Column()
  sell_price: number;

  @Column()
  photo: string;

  @CreateDateColumn()
  create_at: Date;

  @UpdateDateColumn()
  update_at: Date;

  @ManyToOne(() => User, (user) => user.id)
  user: User;
}
