import AppDataSource from "../database";
import { validate } from "class-validator";

import {
	Column,
	Entity,
	PrimaryGeneratedColumn,
	CreateDateColumn,
	UpdateDateColumn,
} from "typeorm";

import {
	Contains,
	IsInt,
	Length,
	IsEmail,
	IsFQDN,
	IsDate,
	Min,
	Max,
} from "class-validator";

@Entity("messages")
export class Message {
	@PrimaryGeneratedColumn("uuid")
	id: string;

	@Column()
	@IsEmail()
	email: string;

	@Column()
	message: string;

	@CreateDateColumn()
	created_at: Date;

	@UpdateDateColumn()
	updated_at: Date;
}
