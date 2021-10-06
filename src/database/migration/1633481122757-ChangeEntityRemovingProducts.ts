import {MigrationInterface, QueryRunner} from "typeorm";

export class ChangeEntityRemovingProducts1633481122757 implements MigrationInterface {
    name = 'ChangeEntityRemovingProducts1633481122757'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "public"."users" DROP CONSTRAINT "FK_b653725c814e4b03090f0ec6ab8"`);
        await queryRunner.query(`CREATE TABLE "rawMaterials" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "createdDate" TIMESTAMP NOT NULL DEFAULT now(), "userId" uuid, CONSTRAINT "PK_4fbf7df837a65aa7aab1b844ea7" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "public"."users" DROP CONSTRAINT "UQ_b653725c814e4b03090f0ec6ab8"`);
        await queryRunner.query(`ALTER TABLE "public"."users" DROP COLUMN "inventoryId"`);
        await queryRunner.query(`ALTER TABLE "rawMaterials" ADD CONSTRAINT "FK_528e0833abec7ad4c86f760ebbf" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "rawMaterials" DROP CONSTRAINT "FK_528e0833abec7ad4c86f760ebbf"`);
        await queryRunner.query(`ALTER TABLE "public"."users" ADD "inventoryId" uuid`);
        await queryRunner.query(`ALTER TABLE "public"."users" ADD CONSTRAINT "UQ_b653725c814e4b03090f0ec6ab8" UNIQUE ("inventoryId")`);
        await queryRunner.query(`DROP TABLE "rawMaterials"`);
        await queryRunner.query(`ALTER TABLE "public"."users" ADD CONSTRAINT "FK_b653725c814e4b03090f0ec6ab8" FOREIGN KEY ("inventoryId") REFERENCES "inventories"("id") ON DELETE NO ACTION ON UPDATE CASCADE`);
    }

}
