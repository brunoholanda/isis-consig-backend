import { Module } from '@nestjs/common';
import { ServidorService } from './servidor.service';
import { ServidorController } from './servidor.controller';

@Module({
  providers: [ServidorService],
  controllers: [ServidorController]
})
export class ServidorModule {}
