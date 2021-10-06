import {MigrationInterface, QueryRunner} from "typeorm";

export class AlterRelations1633477985753 implements MigrationInterface {
    name = 'AlterRelations1633477985753'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "public"."inventories" DROP CONSTRAINT "FK_c539850d38648884689da06c123"`);
        await queryRunner.query(`ALTER TABLE "public"."inventories" DROP CONSTRAINT "FK_19f6e91bd3b53e47103305f3f84"`);
        await queryRunner.query(`ALTER TABLE "public"."inventories" DROP CONSTRAINT "REL_19f6e91bd3b53e47103305f3f8"`);
        await queryRunner.query(`ALTER TABLE "public"."inventories" DROP COLUMN "productId"`);
        await queryRunner.query(`ALTER TABLE "public"."inventories" DROP CONSTRAINT "REL_c539850d38648884689da06c12"`);
        await queryRunner.query(`ALTER TABLE "public"."inventories" DROP COLUMN "userId"`);
        await queryRunner.query(`ALTER TABLE "public"."products" ADD "inventoryId" uuid`);
        await queryRunner.query(`ALTER TABLE "public"."users" ADD "inventoryId" uuid`);
        await queryRunner.query(`ALTER TABLE "public"."products" ADD CONSTRAINT "FK_dcf7550e6f03fb1414ed41628f0" FOREIGN KEY ("inventoryId") REFERENCES "inventories"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "public"."users" ADD CONSTRAINT "FK_b653725c814e4b03090f0ec6ab8" FOREIGN KEY ("inventoryId") REFERENCES "inventories"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "public"."users" DROP CONSTRAINT "FK_b653725c814e4b03090f0ec6ab8"`);
        await queryRunner.query(`ALTER TABLE "public"."products" DROP CONSTRAINT "FK_dcf7550e6f03fb1414ed41628f0"`);
        await queryRunner.query(`ALTER TABLE "public"."users" DROP COLUMN "inventoryId"`);
        await queryRunner.query(`ALTER TABLE "public"."products" DROP COLUMN "inventoryId"`);
        await queryRunner.query(`ALTER TABLE "public"."inventories" ADD "userId" uuid`);
        await queryRunner.query(`ALTER TABLE "public"."inventories" ADD CONSTRAINT "REL_c539850d38648884689da06c12" UNIQUE ("userId")`);
        await queryRunner.query(`ALTER TABLE "public"."inventories" ADD "productId" uuid`);
        await queryRunner.query(`ALTER TABLE "public"."inventories" ADD CONSTRAINT "REL_19f6e91bd3b53e47103305f3f8" UNIQUE ("productId")`);
        await queryRunner.query(`ALTER TABLE "public"."inventories" ADD CONSTRAINT "FK_19f6e91bd3b53e47103305f3f84" FOREIGN KEY ("productId") REFERENCES "products"("id") ON DELETE NO ACTION ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "public"."inventories" ADD CONSTRAINT "FK_c539850d38648884689da06c123" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
