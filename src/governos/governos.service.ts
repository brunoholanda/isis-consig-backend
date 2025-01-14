import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Governo } from './governo.entity';

@Injectable()
export class GovernosService {
  constructor(
    @InjectRepository(Governo)
    private readonly governoRepository: Repository<Governo>,
  ) {}

  findAll(): Promise<Governo[]> {
    return this.governoRepository.find();
  }
}
