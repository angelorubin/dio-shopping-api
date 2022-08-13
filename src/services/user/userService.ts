import { AppDataSource } from "../../database";
import { Message } from "../../entities/Message";
import { validate } from "class-validator";
import { fullname } from "../../utils";

interface ICreateUser {
	firstname: string;
	lastname: string;
}

const createUserService = async ({ firstname, lastname }: ICreateUser) => {
	return fullname({ firstname, lastname });
};

export { createUserService };
