import { DataSource, DataSourceOptions } from 'typeorm';
import { config } from 'dotenv';
config();

export const dataSourceOptions: DataSourceOptions = {
  type: 'mysql',
  host: process.env.MYSQL_HOST,
  port: parseInt(process.env.MYSQL_PORT),
  username: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASS,
  database: process.env.MYSQL_DB,
  entities: [__dirname + '/../**/*.entity.{js,ts}'],
  synchronize: true,
};

const dataSource = new DataSource(dataSourceOptions);
dataSource.initialize();
export default dataSource;
