import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm'

export class ScheduleFinancials1647539101050 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'schedules',
      columns: [
        {
          name: 'id',
          type: 'integer',
          isPrimary: true,
          isGenerated: true,
          generationStrategy: 'increment',
        },
        { name: 'dt_schedule', type: 'timestamp' },
        { name: 'debt_id', type: 'integer', isNullable: true },
        { name: 'credit_id', type: 'integer', isNullable: true },
        { name: 'task_id', type: 'integer', isNullable: true },
        { name: 'user_id', type: 'integer' },
        { name: 'created_at', type: 'timestamp', default: 'now()' },
        { name: 'updated_at', type: 'timestamp', isNullable: true },
        { name: 'deleted_at', type: 'timestamp', isNullable: true },
      ],
    }), true)

    await queryRunner.createForeignKey('schedules', new TableForeignKey({
      columnNames: ['debt_id'],
      referencedColumnNames: ['id'],
      referencedTableName: 'debts',
    }))

    await queryRunner.createForeignKey('schedules', new TableForeignKey({
      columnNames: ['credit_id'],
      referencedColumnNames: ['id'],
      referencedTableName: 'credits',
    }))
    await queryRunner.createForeignKey('schedules', new TableForeignKey({
      columnNames: ['task_id'],
      referencedColumnNames: ['id'],
      referencedTableName: 'tasks',
    }))
    await queryRunner.createForeignKey('schedules', new TableForeignKey({
      columnNames: ['user_id'],
      referencedColumnNames: ['id'],
      referencedTableName: 'users',
    }))
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('schedules')
  }

}
