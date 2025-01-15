import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Servidor } from './servidor.entity';
import { ServidorService } from './servidor.service';
import { ServidorController } from './servidor.controller';
import { JwtModule } from '@nestjs/jwt'; // Importar o JwtModule
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Module({
  imports: [
    TypeOrmModule.forFeature([Servidor]),
    JwtModule.register({
      secret: process.env.JWT_SECRET, // Defina o segredo JWT
      signOptions: { expiresIn: '1h' }, // Tempo de expiração do token
    }),
  ],
  controllers: [ServidorController],
  providers: [ServidorService, JwtAuthGuard],
  exports: [ServidorService],
})
export class ServidorModule {}
