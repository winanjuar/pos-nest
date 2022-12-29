import { Account } from 'src/account/entities/account.entity';
import { Consumen } from 'src/consumen/entities/consumen.entity';
import { Product } from 'src/product/entities/product.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  username: string;

  @Column({ select: false })
  password: string;

  @CreateDateColumn()
  create_at: Date;

  @UpdateDateColumn()
  update_at: Date;

  @OneToMany(() => Product, (product) => product.id)
  products: Product;

  @OneToMany(() => Consumen, (consumen) => consumen.id)
  consumens: Consumen;

  @OneToMany(() => Account, (account) => account.id)
  accounts: Account;
}
