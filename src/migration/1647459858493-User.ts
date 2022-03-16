/* eslint-disable @typescript-eslint/no-empty-function */
import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class User1647459858493 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "user",
            columns: [
                {
                    name: "id",
                    type: "integer",
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment',
                },
                {
                    name: "firstName",
                    type: "varchar",
                },
                {
                    name: "lastName",
                    type: "varchar",
                },
                {
                    name: "age",
                    type: "integer",
                }
            ]
        }), true)
    }

    public async down(queryRunner: QueryRunner): Promise<void> { 
        await queryRunner.dropTable("user")
    }
}
