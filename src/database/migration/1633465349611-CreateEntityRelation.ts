import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateEntityRelation1633465349611 implements MigrationInterface {
    name = 'CreateEntityRelation1633465349611'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "public"."products" DROP CONSTRAINT "FK_04f2acab59d8a5e07cecb906883"`);
        await queryRunner.query(`ALTER TABLE "public"."users" DROP CONSTRAINT "FK_5573de1127aab4d7fbb9687e97a"`);
        await queryRunner.query(`CREATE TABLE "inventories" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "quantity" integer NOT NULL, "createdDate" TIMESTAMP NOT NULL DEFAULT now(), "productId" uuid, "userId" uuid, CONSTRAINT "REL_19f6e91bd3b53e47103305f3f8" UNIQUE ("productId"), CONSTRAINT "REL_c539850d38648884689da06c12" UNIQUE ("userId"), CONSTRAINT "PK_7b1946392ffdcb50cfc6ac78c0e" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "public"."products" DROP COLUMN "iventoryId"`);
        await queryRunner.query(`ALTER TABLE "public"."users" DROP COLUMN "iventoryId"`);
        await queryRunner.query(`ALTER TABLE "inventories" ADD CONSTRAINT "FK_19f6e91bd3b53e47103305f3f84" FOREIGN KEY ("productId") REFERENCES "products"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "inventories" ADD CONSTRAINT "FK_c539850d38648884689da06c123" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "inventories" DROP CONSTRAINT "FK_c539850d38648884689da06c123"`);
        await queryRunner.query(`ALTER TABLE "inventories" DROP CONSTRAINT "FK_19f6e91bd3b53e47103305f3f84"`);
        await queryRunner.query(`ALTER TABLE "public"."users" ADD "iventoryId" uuid`);
        await queryRunner.query(`ALTER TABLE "public"."products" ADD "iventoryId" uuid`);
        await queryRunner.query(`DROP TABLE "inventories"`);
        await queryRunner.query(`ALTER TABLE "public"."users" ADD CONSTRAINT "FK_5573de1127aab4d7fbb9687e97a" FOREIGN KEY ("iventoryId") REFERENCES "iventories"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "public"."products" ADD CONSTRAINT "FK_04f2acab59d8a5e07cecb906883" FOREIGN KEY ("iventoryId") REFERENCES "iventories"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
