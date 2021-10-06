import {MigrationInterface, QueryRunner} from "typeorm";

export class AddingOnUpdateCascade1633476555161 implements MigrationInterface {
    name = 'AddingOnUpdateCascade1633476555161'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "public"."inventories" DROP CONSTRAINT "FK_19f6e91bd3b53e47103305f3f84"`);
        await queryRunner.query(`ALTER TABLE "public"."inventories" ADD CONSTRAINT "FK_19f6e91bd3b53e47103305f3f84" FOREIGN KEY ("productId") REFERENCES "products"("id") ON DELETE NO ACTION ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "public"."inventories" DROP CONSTRAINT "FK_19f6e91bd3b53e47103305f3f84"`);
        await queryRunner.query(`ALTER TABLE "public"."inventories" ADD CONSTRAINT "FK_19f6e91bd3b53e47103305f3f84" FOREIGN KEY ("productId") REFERENCES "products"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
