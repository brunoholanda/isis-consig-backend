import { Controller, Get, Query, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { ServidorService } from './servidor.service';

@Controller('servidor')
export class ServidorController {
  constructor(private readonly servidorService: ServidorService) {}

  @UseGuards(JwtAuthGuard)
  @Get('search')
  async search(@Query('matricula') matricula: string, @Query('cpf') cpf: string) {
    return this.servidorService.searchServidores(matricula, cpf);
  }
}
