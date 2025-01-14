import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import * as bcrypt from 'bcrypt';
import { Governo } from 'src/governos/governo.entity';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>,
    ) { }

    async findAll(): Promise<User[]> {
        return this.userRepository.find();
    }

    async findByEmail(email: string): Promise<User | undefined> {
        return this.userRepository.findOne({ where: { email } });
    }

    async findGovernoByUser(governoId: string): Promise<Governo | undefined> {
        return this.userRepository
          .createQueryBuilder('user')
          .leftJoinAndSelect('user.governo', 'governo')
          .where('user.governo_id = :governoId', { governoId })
          .getOne()
          .then((user) => user?.governo);
      }

      
    async create(userDto: { nome: string; email: string; password: string; role: string }) {
        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(userDto.password, salt);

        const user = this.userRepository.create({
            ...userDto,
            password: hashedPassword,
        });
        return this.userRepository.save(user);
    }
}
