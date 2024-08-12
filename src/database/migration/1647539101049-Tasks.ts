import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm'

export class Tasks1647539101049 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'tasks',
      columns: [
        {
          name: 'id',
          type: 'integer',
          isPrimary: true,
          isGenerated: true,
          generationStrategy: 'increment',
        },
        { name: 'name', type: 'varchar' },
        { name: 'description', type: 'varchar' },
        { name: 'dt_task', type: 'timestamp' },
        { name: 'type_task_id', type: 'integer' },
        { name: 'debt_id', type: 'integer', isNullable: true },
        { name: 'credit_id', type: 'integer', isNullable: true },
        { name: 'user_id', type: 'integer' },
        { name: 'created_at', type: 'timestamp', default: 'now()'},
        { name: 'updated_at', type: 'timestamp', default: 'now()', isNullable: true },
      ],
    }), true)

    await queryRunner.createForeignKey('tasks', new TableForeignKey({
      columnNames: ['type_task_id'],
      referencedColumnNames: ['id'],
      referencedTableName: 'types',
    }))

    await queryRunner.createForeignKey('tasks', new TableForeignKey({
      columnNames: ['debt_id'],
      referencedColumnNames: ['id'],
      referencedTableName: 'debts',
    }))

    await queryRunner.createForeignKey('tasks', new TableForeignKey({
      columnNames: ['credit_id'],
      referencedColumnNames: ['id'],
      referencedTableName: 'credits',
    }))
    await queryRunner.createForeignKey('tasks', new TableForeignKey({
      columnNames: ['user_id'],
      referencedColumnNames: ['id'],
      referencedTableName: 'users',
    }))
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('tasks')
  }
}
