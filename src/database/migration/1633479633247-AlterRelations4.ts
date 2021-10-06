import {MigrationInterface, QueryRunner} from "typeorm";

export class AlterRelations41633479633247 implements MigrationInterface {
    name = 'AlterRelations41633479633247'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "public"."inventories" DROP CONSTRAINT "FK_c539850d38648884689da06c123"`);
        await queryRunner.query(`ALTER TABLE "public"."inventories" DROP COLUMN "userId"`);
        await queryRunner.query(`ALTER TABLE "public"."users" ADD "inventoryId" uuid`);
        await queryRunner.query(`ALTER TABLE "public"."users" ADD CONSTRAINT "UQ_b653725c814e4b03090f0ec6ab8" UNIQUE ("inventoryId")`);
        await queryRunner.query(`ALTER TABLE "public"."users" ADD CONSTRAINT "FK_b653725c814e4b03090f0ec6ab8" FOREIGN KEY ("inventoryId") REFERENCES "inventories"("id") ON DELETE NO ACTION ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "public"."users" DROP CONSTRAINT "FK_b653725c814e4b03090f0ec6ab8"`);
        await queryRunner.query(`ALTER TABLE "public"."users" DROP CONSTRAINT "UQ_b653725c814e4b03090f0ec6ab8"`);
        await queryRunner.query(`ALTER TABLE "public"."users" DROP COLUMN "inventoryId"`);
        await queryRunner.query(`ALTER TABLE "public"."inventories" ADD "userId" uuid`);
        await queryRunner.query(`ALTER TABLE "public"."inventories" ADD CONSTRAINT "FK_c539850d38648884689da06c123" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
