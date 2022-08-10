import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateProductsTable1660164230824 implements MigrationInterface {
	public async up(queryRunner: QueryRunner): Promise<void> {
		new Table({
			name: "messages",
			columns: [
				{
					name: "id",
					type: "uuid",
					isPrimary: true,
				},
			],
		});
	}

	public async down(queryRunner: QueryRunner): Promise<void> {}
}
