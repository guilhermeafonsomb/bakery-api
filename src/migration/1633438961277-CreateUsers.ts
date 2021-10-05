import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class CreateUsers1633438961277 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
              name: "users",
              columns: [
                {
                  name: "id",
                  type: "uuid",
                  isPrimary: true,
                },
                {
                  name: "name",
                  type: "varchar(200)"
                },
                {
                  name: "position",
                  type: "varchar(200)"
                },
                {
                  name: "iventoryId",
                  type: "uuid"
                }
              ]
            })
          );
          await queryRunner.createForeignKey('users', new TableForeignKey({
              name: 'FK_users_iventory',
              columnNames: ['iventoryId'],
              referencedTableName: 'inventories',
              referencedColumnNames: ['id']
          }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('users', 'FK_users_iventory');
        await queryRunner.dropTable('user');
    }

}
