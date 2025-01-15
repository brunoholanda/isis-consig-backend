import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ServidorAuthService } from './servidor-auth.service';
import { ServidorAuthController } from './servidor-auth.controller';
import { Governo } from '../governos/governo.entity';
import { Servidor } from '../servidor/servidor.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Servidor, Governo])],
  providers: [ServidorAuthService],
  controllers: [ServidorAuthController],
})
export class ServidorAuthModule {}
