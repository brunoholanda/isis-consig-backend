import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { User } from '../users/user.entity';

@Entity('governos')
export class Governo {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 255 })
  nome: string;

  @Column({ type: 'varchar', length: 20 })
  cnpj: string;

  @Column({ type: 'varchar', length: 255 })
  endereco: string;

  @Column({ type: 'varchar', length: 20 })
  telefone: string;

  @Column({ type: 'varchar', unique: true, length: 50 })
  link_name: string;

  @OneToMany(() => User, (user) => user.governo)
  users: User[];
}
