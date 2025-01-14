import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    ManyToOne,
    JoinColumn,
  } from 'typeorm';
  import { Governo } from '../governos/governo.entity';
  
  @Entity('users')
  export class User {
    @PrimaryGeneratedColumn('uuid') // ou use 'increment' para INTEGER
    id: string;
  
    @Column({ type: 'varchar', length: 255 })
    nome: string;
  
    @Column({ type: 'varchar', unique: true, length: 255 })
    email: string;
  
    @Column({ type: 'varchar', length: 255 })
    password: string;
  
    @Column({ type: 'varchar', length: 50 })
    role: string;
  
    @CreateDateColumn({ type: 'timestamp' })
    created_at: Date;
  
    @UpdateDateColumn({ type: 'timestamp' })
    updated_at: Date;
  
    @Column({ type: 'varchar', length: 20 })
    status: string;
  
    @Column({ type: 'timestamp', nullable: true })
    last_login: Date;
  
    @Column({ type: 'varchar', length: 255, nullable: true })
    reset_token: string;
  
    @Column({ type: 'timestamp', nullable: true })
    reset_token_exp: Date;
  
    @Column({ type: 'varchar', length: 50 })
    user_type: string;
  
    @ManyToOne(() => Governo, (governo) => governo.users, { eager: true })
    @JoinColumn({ name: 'governo_id' })
    governo: Governo;
  }
  