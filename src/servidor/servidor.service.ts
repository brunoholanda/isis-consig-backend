import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Servidor } from './servidor.entity';

@Injectable()
export class ServidorService {
  constructor(
    @InjectRepository(Servidor)
    private readonly servidorRepository: Repository<Servidor>,
  ) {}

  async searchServidores(matricula?: string, cpf?: string): Promise<Servidor[]> {
    const query = this.servidorRepository.createQueryBuilder('servidor');

    if (matricula) {
      query.andWhere('servidor.matricula = :matricula', { matricula });
    }

    if (cpf) {
      query.andWhere('servidor.cpf = :cpf', { cpf });
    }

    return query.getMany();
  }
}
