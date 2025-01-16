import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class AddCamposServidor1737058061525 implements MigrationInterface {
    name = 'AddCamposServidor1737058061525'
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumns('servidor', [
            new TableColumn({
                name: 'salario_bruto',
                type: 'decimal',
                precision: 10,
                scale: 2,
                isNullable: true,
            }),
            new TableColumn({
                name: 'descontos',
                type: 'decimal',
                precision: 10,
                scale: 2,
                isNullable: true,
            }),
            new TableColumn({
                name: 'salario_liquido',
                type: 'decimal',
                precision: 10,
                scale: 2,
                isNullable: true,
            }),
            new TableColumn({
                name: 'margem_consignavel_disponivel',
                type: 'decimal',
                precision: 10,
                scale: 2,
                isNullable: true,
            }),
        ]);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumns('servidor', [
            'salario_bruto',
            'descontos',
            'salario_liquido',
            'margem_consignavel_disponivel',
        ]);
    }
}