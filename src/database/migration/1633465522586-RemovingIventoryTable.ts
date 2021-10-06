import {MigrationInterface, QueryRunner} from "typeorm";

export class RemovingIventoryTable1633465522586 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('iventories');
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "iventories" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "quantity" integer NOT NULL, "createdDate" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_2308394683f2002f930fae05563" PRIMARY KEY ("id"))`);
    }

}
