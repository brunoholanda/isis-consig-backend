import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateUsersTable1736855157625 implements MigrationInterface {
    name = 'CreateUsersTable1736855157625'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "users" (
            "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
            "nome" character varying(255) NOT NULL,
            "email" character varying(255) NOT NULL,
            "password" character varying(255) NOT NULL,
            "role" character varying(50) NOT NULL,
            "created_at" TIMESTAMP NOT NULL DEFAULT now(),
            "updated_at" TIMESTAMP NOT NULL DEFAULT now(),
            "status" character varying(20) NOT NULL,
            "last_login" TIMESTAMP,
            "reset_token" character varying(255),
            "reset_token_exp" TIMESTAMP,
            "user_type" character varying(50) NOT NULL,
            "governo_id" uuid NOT NULL,
            CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email"),
            CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id")
        )`);
        
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "FK_64ed11d12897846a585b45e128d" 
                                 FOREIGN KEY ("governo_id") REFERENCES "governos"("id") 
                                 ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "FK_64ed11d12897846a585b45e128d"`);
        await queryRunner.query(`DROP TABLE "users"`);
    }
}
