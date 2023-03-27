import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm'

export class Types1647539075171 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'types',
      columns: [
        {
          name: 'id',
          type: 'integer',
          isPrimary: true,
          isGenerated: true,
          generationStrategy: 'increment',
        },
        { name: 'name', type: 'varchar' },
        { name: 'aux_types_id', type: 'integer' },
      ],
    }), true)

    await queryRunner.createForeignKey('types', new TableForeignKey({
      columnNames: ['aux_types_id'],
      referencedColumnNames: ['id'],
      referencedTableName: 'aux_types',
    }))
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('types')
  }
}
