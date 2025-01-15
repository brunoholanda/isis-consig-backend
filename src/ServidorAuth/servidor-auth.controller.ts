import { Controller, Post, Body, Param } from '@nestjs/common';
import { ServidorAuthService } from './servidor-auth.service';

@Controller(':nameLink/servidor')
export class ServidorAuthController {
  constructor(private readonly servidorAuthService: ServidorAuthService) {}

  @Post('login')
  async login(
    @Param('nameLink') nameLink: string,
    @Body() { matricula, password }: { matricula: string; password: string },
  ) {
    const servidor = await this.servidorAuthService.validateServidor(nameLink, matricula, password);

    return {
      message: 'Login realizado com sucesso',
      servidor: {
        id: servidor.id,
        nome: servidor.nome,
        matricula: servidor.matricula,
        email: servidor.email,
        cargo: servidor.cargo,
        governo_id: servidor.governo_id,
      },
    };
  }
}
