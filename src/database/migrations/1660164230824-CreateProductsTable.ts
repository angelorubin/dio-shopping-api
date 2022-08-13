import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateProductsTable1660164230824 implements MigrationInterface {
	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.createTable(
			new Table({
				name: "products",
				columns: [
					{
						name: "id",
						type: "uuid",
						isPrimary: true,
					},
					{
						name: "category",
						type: "string",
					},
					{
						name: "name",
						type: "string",
					},
					{
						name: "price",
						type: "number",
					},
					{
						name: "image_path",
						type: "string",
					},
					{
						name: "selected",
						type: "boolean",
					},
					{
						name: "created_at",
						type: "datetime",
					},
					{
						name: "updated_at",
						type: "datetime",
					},
				],
			})
		);
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.dropTable("products");
	}
}
