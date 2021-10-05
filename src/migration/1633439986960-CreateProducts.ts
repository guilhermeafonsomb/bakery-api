import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class CreateProducts1633439986960 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
              name: "products",
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
                  name: "iventoryId",
                  type: "uuid"
                }
              ]
            })
          );
          await queryRunner.createForeignKey('products', new TableForeignKey({
              name: 'FK_products_iventory',
              columnNames: ['iventoryId'],
              referencedTableName: 'inventories',
              referencedColumnNames: ['id']
          }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('products', 'FK_products_iventory');
        await queryRunner.dropTable('products');
    }

}
