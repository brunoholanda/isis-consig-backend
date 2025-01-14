import { Controller, Get } from '@nestjs/common';
import { GovernosService } from './governos.service';
import { Governo } from './governo.entity';

@Controller('governos')
export class GovernosController {
  constructor(private readonly governosService: GovernosService) {}

  @Get()
  findAll(): Promise<Governo[]> {
    return this.governosService.findAll();
  }
}
