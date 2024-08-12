import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm'

export class Debts1647539075172 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'debts',
      columns: [
        {
          name: 'id',
          type: 'integer',
          isPrimary: true,
          isGenerated: true,
          generationStrategy: 'increment',
        },
        { name: 'title', type: 'varchar' },
        { name: 'description', type: 'longtext' },
        { name: 'value', type: 'decimal', precision: 11, scale: 2 },
        { name: 'dt_debt', type: 'timestamp' },
        { name: 'qtd_plots', type: 'integer', isNullable: true },
        { name: 'type_debts_id', type: 'integer' },
        { name: 'user_id', type: 'integer' },
        { name: 'created_at', type: 'timestamp', isNullable: true },
        { name: 'updated_at', type: 'timestamp', default: 'now()', isNullable: true },
      ],
    }), true)

    await queryRunner.createForeignKey('debts', new TableForeignKey({
      columnNames: ['type_debts_id'],
      referencedColumnNames: ['id'],
      referencedTableName: 'types',
    }))

    await queryRunner.createForeignKey('debts', new TableForeignKey({
      columnNames: ['user_id'],
      referencedColumnNames: ['id'],
      referencedTableName: 'users',
    }))

  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('debts')
  }

}
