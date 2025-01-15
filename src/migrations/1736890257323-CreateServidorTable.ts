import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateServidorTable1736890257323 implements MigrationInterface {
    name = 'CreateServidorTable1736890257323'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
          CREATE TABLE "servidor" (
            "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
            "nome" character varying(255),
            "endereco" character varying(255),
            "telefone" character varying(20),
            "cpf" character varying(11),
            "matricula" character varying(50),
            "email" character varying(255),
            "cargo" character varying(100),
            "data_admissao" date,
            "status" character varying(20),
            "password" character varying(255),
            "governo_id" uuid,
            CONSTRAINT "PK_243457082304d7c5cfafedba752" PRIMARY KEY ("id")
          )
        `);

        await queryRunner.query(`
          ALTER TABLE "users" 
          DROP CONSTRAINT "FK_64ed11d12897846a585b45e128d"
        `);
        await queryRunner.query(`
          ALTER TABLE "users" 
          ALTER COLUMN "governo_id" DROP NOT NULL
        `);

        await queryRunner.query(`
          UPDATE "governos" 
          SET "nome" = 'N/D' 
          WHERE "nome" IS NULL
        `);
        await queryRunner.query(`
          ALTER TABLE "governos" 
          ALTER COLUMN "nome" SET NOT NULL
        `);

        await queryRunner.query(`
          UPDATE "governos" 
          SET "cnpj" = 'N/D' 
          WHERE "cnpj" IS NULL
        `);
        await queryRunner.query(`
          ALTER TABLE "governos" 
          ALTER COLUMN "cnpj" SET NOT NULL
        `);

        await queryRunner.query(`
          ALTER TABLE "users" 
          ADD CONSTRAINT "FK_64ed11d12897846a585b45e128d" 
          FOREIGN KEY ("governo_id") REFERENCES "governos"("id") 
          ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
        await queryRunner.query(`
          ALTER TABLE "servidor" 
          ADD CONSTRAINT "FK_857fbae0b9dca4daff02d27bbb6" 
          FOREIGN KEY ("governo_id") REFERENCES "governos"("id") 
          ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "servidor" DROP CONSTRAINT "FK_857fbae0b9dca4daff02d27bbb6"`);
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "FK_64ed11d12897846a585b45e128d"`);
        await queryRunner.query(`DROP TABLE "servidor"`);
    }
}
