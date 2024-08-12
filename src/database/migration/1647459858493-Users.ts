/* eslint-disable @typescript-eslint/no-empty-function */
import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export class User1647459858493 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'users',
      columns: [
        {
          name: 'id',
          type: 'integer',
          isPrimary: true,
          isGenerated: true,
          generationStrategy: 'increment',
        },
        { name: 'login', type: 'varchar', isUnique: true },
        { name: 'password', type: 'varchar' },
        { name: 'name', type: 'varchar' },
        { name: 'document', type: 'char', length: '15' },
        { name: 'email', type: 'varchar', isUnique: true },
      ],
    }), true)
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('users')
  }
}
