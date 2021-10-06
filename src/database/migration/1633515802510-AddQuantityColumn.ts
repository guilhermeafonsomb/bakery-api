import {MigrationInterface, QueryRunner} from "typeorm";

export class AddQuantityColumn1633515802510 implements MigrationInterface {
    name = 'AddQuantityColumn1633515802510'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "public"."rawMaterials" ADD "quantity" integer NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "public"."rawMaterials" DROP COLUMN "quantity"`);
    }

}
