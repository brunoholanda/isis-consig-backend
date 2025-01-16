import { Governo } from '../governos/governo.entity';
import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    ManyToOne,
    JoinColumn,
} from 'typeorm';

@Entity('servidor')
export class Servidor {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ type: 'varchar', length: 255, nullable: true })
    nome: string | null;

    @Column({ type: 'varchar', length: 255, nullable: true })
    endereco: string | null;

    @Column({ type: 'varchar', length: 20, nullable: true })
    telefone: string | null;

    @Column({ type: 'varchar', length: 11, nullable: true })
    cpf: string | null;

    @Column({ type: 'varchar', length: 50, nullable: true })
    matricula: string | null;

    @Column({ type: 'varchar', length: 255, nullable: true })
    email: string | null;

    @Column({ type: 'varchar', length: 100, nullable: true })
    cargo: string | null;

    @Column({ type: 'date', nullable: true })
    data_admissao: Date | null;

    @Column({ type: 'varchar', length: 20, nullable: true })
    status: string | null;

    @Column({ type: 'varchar', length: 255, nullable: true })
    password: string | null;

    @Column({ type: 'uuid', nullable: true })
    governo_id: string | null;

    @ManyToOne(() => Governo, { nullable: true })
    @JoinColumn({ name: 'governo_id' })
    governo: Governo | null;

    // Novos campos
    @Column({ type: 'decimal', precision: 10, scale: 2, nullable: true })
    salario_bruto: number | null;

    @Column({ type: 'decimal', precision: 10, scale: 2, nullable: true })
    descontos: number | null;

    @Column({ type: 'decimal', precision: 10, scale: 2, nullable: true })
    salario_liquido: number | null;

    @Column({ type: 'decimal', precision: 10, scale: 2, nullable: true })
    margem_consignavel_disponivel: number | null;
}