import {
	Column,
	Entity,
	PrimaryGeneratedColumn,
	CreateDateColumn,
	UpdateDateColumn,
} from "typeorm";

@Entity("product")
export class Product {
	@PrimaryGeneratedColumn("uuid")
	id: string;

	@Column()
	category: string;

	@Column()
	name: string;

	@Column()
	price: number;

	@Column()
	image_path: string;

	@Column()
	selected: boolean;

	@CreateDateColumn()
	created_at: Date;

	@UpdateDateColumn()
	updated_at: Date;
}

/**
 * id_product: 1,
      category: "nacional",
      fk_idcategorys: 1,
      name_product: "Flamengo 2020",
      price: 300,
      image: "./images/produtos/fla.jpg",
      id_categorys: 1,
      name_categorys: "Clubes brasileiros",
      selected: false
 */
