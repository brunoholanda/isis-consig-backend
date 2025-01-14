import { DataSource } from 'typeorm';
import 'dotenv/config';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_ISIS_HOST,
  port: parseInt(process.env.DB_ISIS_PORT) || 5432,
  username: process.env.DB_ISIS_USER,
  password: process.env.DB_ISIS_PASS,
  database: process.env.DB_ISIS_NAME,
  entities: ['src/**/*.entity.ts'],
  migrations: ['src/migrations/*.ts'],
  synchronize: false,
});
