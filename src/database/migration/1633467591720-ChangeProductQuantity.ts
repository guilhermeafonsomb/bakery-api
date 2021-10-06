import {MigrationInterface, QueryRunner} from "typeorm";

export class ChangeProductQuantity1633467591720 implements MigrationInterface {
    name = 'ChangeProductQuantity1633467591720'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "public"."inventories" DROP COLUMN "quantity"`);
        await queryRunner.query(`ALTER TABLE "public"."products" ADD "quantity" integer NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "public"."products" DROP COLUMN "quantity"`);
        await queryRunner.query(`ALTER TABLE "public"."inventories" ADD "quantity" integer NOT NULL`);
    }

}
