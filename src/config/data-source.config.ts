import { DataSource, DataSourceOptions } from 'typeorm';
import { config } from 'dotenv';
import { User } from 'src/user/entities/user.entity';
import { Product } from 'src/product/entities/product.entity';
import { Consumen } from 'src/consumen/entities/consumen.entity';
config();

export const dataSourceOptions: DataSourceOptions = {
  type: 'mysql',
  host: process.env.MYSQL_HOST,
  port: parseInt(process.env.MYSQL_PORT),
  username: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASS,
  database: process.env.MYSQL_DB,
  // entities: [__dirname + '/../**/*.entity.{js,ts}'],
  entities: [User, Product, Consumen],
  synchronize: true,
};

const dataSource = new DataSource(dataSourceOptions);
dataSource.initialize();
export default dataSource;
