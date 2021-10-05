import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateEntityRelation1633443106201 implements MigrationInterface {
    name = 'CreateEntityRelation1633443106201'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "products" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "iventoryId" uuid, CONSTRAINT "PK_0806c755e0aca124e67c0cf6d7d" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "users" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "position" character varying NOT NULL, "iventoryId" uuid, CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "iventories" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "quantity" integer NOT NULL, "createdDate" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_2308394683f2002f930fae05563" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "products" ADD CONSTRAINT "FK_04f2acab59d8a5e07cecb906883" FOREIGN KEY ("iventoryId") REFERENCES "iventories"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "FK_5573de1127aab4d7fbb9687e97a" FOREIGN KEY ("iventoryId") REFERENCES "iventories"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "FK_5573de1127aab4d7fbb9687e97a"`);
        await queryRunner.query(`ALTER TABLE "products" DROP CONSTRAINT "FK_04f2acab59d8a5e07cecb906883"`);
        await queryRunner.query(`DROP TABLE "iventories"`);
        await queryRunner.query(`DROP TABLE "users"`);
        await queryRunner.query(`DROP TABLE "products"`);
    }

}
