import {MigrationInterface, QueryRunner, Table, TableForeignKey} from 'typeorm'

export class Credits1647539082567 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'credits',
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
        { name: 'dt_credit', type: 'timestamp' },
        { name: 'qtd_repeat', type: 'integer', isNullable: true },
        { name: 'type_credits_id', type: 'integer' },
        { name: 'user_id', type: 'integer' },
        { name: 'created_at', type: 'timestamp', isNullable: true },
        { name: 'updated_at', type: 'timestamp', default: 'now()', isNullable: true },
      ],
    }), true)

    await queryRunner.createForeignKey('credits', new TableForeignKey({
      columnNames: ['type_credits_id'],
      referencedColumnNames: ['id'],
      referencedTableName: 'types',
    }))

    await queryRunner.createForeignKey('credits', new TableForeignKey({
      columnNames: ['user_id'],
      referencedColumnNames: ['id'],
      referencedTableName: 'users',
    }))
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('credits')
  }

}
