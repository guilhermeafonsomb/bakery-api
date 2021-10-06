import {MigrationInterface, QueryRunner} from "typeorm";

export class AlterRelations31633479325977 implements MigrationInterface {
    name = 'AlterRelations31633479325977'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "public"."inventories" DROP CONSTRAINT "FK_19f6e91bd3b53e47103305f3f84"`);
        await queryRunner.query(`ALTER TABLE "public"."inventories" DROP COLUMN "productId"`);
        await queryRunner.query(`ALTER TABLE "public"."products" ADD "inventoryId" uuid`);
        await queryRunner.query(`ALTER TABLE "public"."products" ADD CONSTRAINT "UQ_dcf7550e6f03fb1414ed41628f0" UNIQUE ("inventoryId")`);
        await queryRunner.query(`ALTER TABLE "public"."products" ADD CONSTRAINT "FK_dcf7550e6f03fb1414ed41628f0" FOREIGN KEY ("inventoryId") REFERENCES "inventories"("id") ON DELETE NO ACTION ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "public"."products" DROP CONSTRAINT "FK_dcf7550e6f03fb1414ed41628f0"`);
        await queryRunner.query(`ALTER TABLE "public"."products" DROP CONSTRAINT "UQ_dcf7550e6f03fb1414ed41628f0"`);
        await queryRunner.query(`ALTER TABLE "public"."products" DROP COLUMN "inventoryId"`);
        await queryRunner.query(`ALTER TABLE "public"."inventories" ADD "productId" uuid`);
        await queryRunner.query(`ALTER TABLE "public"."inventories" ADD CONSTRAINT "FK_19f6e91bd3b53e47103305f3f84" FOREIGN KEY ("productId") REFERENCES "products"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
