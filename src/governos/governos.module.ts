import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GovernosService } from './governos.service';
import { GovernosController } from './governos.controller';
import { Governo } from './governo.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Governo])],
  controllers: [GovernosController],
  providers: [GovernosService],
})
export class GovernosModule {}
