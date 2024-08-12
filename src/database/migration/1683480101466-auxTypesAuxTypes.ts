import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm'

export class auxTypesAuxTypes1683480101466 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'types_aux_types',
      columns: [
        {
          name: 'id',
          type: 'integer',
          isPrimary: true,
          isGenerated: true,
          generationStrategy: 'increment',
        },
        { name: 'types_id', type: 'integer' },
        { name: 'aux_types_id', type: 'integer' },
      ],
    }), true)

    await queryRunner.createForeignKey('types_aux_types', new TableForeignKey({
      columnNames: ['types_id'],
      referencedColumnNames: ['id'],
      referencedTableName: 'types',
    }))
    await queryRunner.createForeignKey('types_aux_types', new TableForeignKey({
      columnNames: ['aux_types_id'],
      referencedColumnNames: ['id'],
      referencedTableName: 'aux_types',
    }))
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('types_aux_types')
  }

}
