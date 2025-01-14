import { MigrationInterface, QueryRunner } from "typeorm";

export class AddLinkNameToGovernos1736857245645 implements MigrationInterface {
    name = 'AddLinkNameToGovernos1736857245645'

    public async up(queryRunner: QueryRunner): Promise<void> {
        // Adicionar a coluna link_name com um valor temporário
        await queryRunner.query(`
          ALTER TABLE "governos" 
          ADD "link_name" character varying(50)
        `);
    
        // Preencher link_name com valores únicos temporários
        await queryRunner.query(`
          UPDATE "governos" 
          SET "link_name" = 'gov_' || "id"
        `);
    
        // Alterar a coluna para NOT NULL
        await queryRunner.query(`
          ALTER TABLE "governos" 
          ALTER COLUMN "link_name" SET NOT NULL
        `);
    
        // Adicionar a restrição UNIQUE
        await queryRunner.query(`
          ALTER TABLE "governos" 
          ADD CONSTRAINT "UQ_governos_link_name" UNIQUE ("link_name")
        `);
      }
    
      public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
          ALTER TABLE "governos" 
          DROP CONSTRAINT "UQ_governos_link_name"
        `);
        await queryRunner.query(`
          ALTER TABLE "governos" 
          DROP COLUMN "link_name"
        `);
      }
    }
    