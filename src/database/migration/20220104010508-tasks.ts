import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm'

export class Tasks20220104010508 implements MigrationInterface {
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
        {
          name: 'name',
          type: 'string',
        },
        {
          name: 'description',
          type: 'integer',
        },
        {
          name: 'dt_task',
          type: 'timestamp',
          default: 'now()',
        },
        {
          name: 'type_task_id',
          type: 'integer',
        },
        {
          name: 'debt_id',
          type: 'integer',
        },
        {
          name: 'credt_id',
          type: 'integer',
        },
        {
          name: 'user_id',
          type: 'integer',
        },
        {
          name: 'createdAt',
          type: 'timestamp',
          default: 'now()',
        },
        {
          name: 'updatedAt',
          type: 'timestamp',
          default: 'now()',
        },
        {
          name: 'deleteAt',
          type: 'timestamp',
          default: 'now()',
        },
      ],
    }), true)

    await queryRunner.createForeignKey('tasks', new TableForeignKey({
      columnNames: ['type_task_id'],
      referencedColumnNames: ['id'],
      referencedTableName: 'question',
      onDelete: 'CASCADE',
    }))
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('types_models')
  }
}