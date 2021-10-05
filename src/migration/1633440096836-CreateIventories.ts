import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class CreateIventories1633440096836 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "iventories",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true,
                    },
                    {
                        name: "quatity",
                        type: "integer"
                    },
                    {
                        name: "createdDate",
                        type: "timestamp",
                        default: "now()"
                    },
                    {
                        name: "userId",
                        type: "uuid",
                    },
                    {
                        name: "productId",
                        type: "uuid"
                    }
                ]
            })
        );
        await queryRunner.createForeignKey('iventories', new TableForeignKey({
            name: 'FK_iventories_products',
            columnNames: ['productId'],
            referencedTableName: 'products',
            referencedColumnNames: ['id']
        }))

        await queryRunner.createForeignKey('iventories', new TableForeignKey({
            name: 'FK_iventories_users',
            columnNames: ['userId'],
            referencedTableName: 'users',
            referencedColumnNames: ['id']
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('iventories', 'FK_iventories_users');
        await queryRunner.dropForeignKey('iventories', 'FK_iventories_products');
        await queryRunner.dropTable('iventories');
    }

}
