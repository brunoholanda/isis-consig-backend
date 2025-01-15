import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Governo } from '../governos/governo.entity';
import * as bcrypt from 'bcrypt';
import { Servidor } from 'src/servidor/servidor.entity';

@Injectable()
export class ServidorAuthService {
  constructor(
    @InjectRepository(Servidor)
    private readonly servidorRepository: Repository<Servidor>,

    @InjectRepository(Governo)
    private readonly governoRepository: Repository<Governo>,
  ) {}

  async validateServidor(nameLink: string, matricula: string, password: string): Promise<Servidor | null> {
    // Buscar o governo pelo nameLink
    const governo = await this.governoRepository.findOne({ where: { link_name: nameLink } });
    if (!governo) {
      throw new UnauthorizedException('Governo não encontrado.');
    }

    // Buscar o servidor pela matrícula e governo_id
    const servidor = await this.servidorRepository.findOne({ where: { matricula, governo_id: governo.id } });
    if (!servidor) {
      throw new UnauthorizedException('Matrícula ou senha inválida.');
    }

    // Validar a senha usando bcrypt
    const isPasswordValid = await bcrypt.compare(password, servidor.password);
    if (!isPasswordValid) {
      throw new UnauthorizedException('Matrícula ou senha inválida.');
    }

    return servidor;
}

}
