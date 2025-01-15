import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { GovernosController } from './governos/governos.controller';
import { GovernosService } from './governos/governos.service';
import { Governo } from './governos/governo.entity';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { ServidorModule } from './servidor/servidor.module';
import { ServidorAuthModule } from './ServidorAuth/servidor-auth.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_ISIS_HOST,
      port: parseInt(process.env.DB_ISIS_PORT, 10),
      username: process.env.DB_ISIS_USER,
      password: process.env.DB_ISIS_PASS,
      database: process.env.DB_ISIS_NAME,
      autoLoadEntities: true,
      synchronize: false,
    }),
    TypeOrmModule.forFeature([Governo]),
    UsersModule,
    AuthModule,
    ServidorModule,
    ServidorAuthModule,
  ],
  controllers: [GovernosController],
  providers: [GovernosService],
})
export class AppModule {}
