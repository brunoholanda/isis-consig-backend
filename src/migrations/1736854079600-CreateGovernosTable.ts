import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateGovernosTable1736854079600 implements MigrationInterface {
    name = 'CreateGovernosTable1736854079600'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "governos" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "nome" character varying NOT NULL, "cnpj" character varying NOT NULL, "endereco" character varying NOT NULL, "telefone" character varying NOT NULL, CONSTRAINT "PK_c602dcf09a1e961e388ad28be18" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "governos"`);
    }

}
