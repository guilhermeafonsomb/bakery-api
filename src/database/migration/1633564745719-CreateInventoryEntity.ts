import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateInventoryEntity1633564745719 implements MigrationInterface {
    name = 'CreateInventoryEntity1633564745719'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "inventory" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "productName" character varying NOT NULL, "userName" character varying NOT NULL, "quantity" integer NOT NULL, "status" character varying NOT NULL, "createdDate" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_82aa5da437c5bbfb80703b08309" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "inventory"`);
    }

}
