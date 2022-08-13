import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
	name: "default",
	type: "sqlite",
	database: "src/database/database.sqlite",
	entities: ["src/entities/*.ts"],
	migrations: ["src/database/migrations/*.ts"],
});

AppDataSource.initialize()
	.then(() => {
		console.log("Data Source has been initialized!");
	})
	.catch((err) => {
		console.error("Error during Data Source initialization", err);
	});
