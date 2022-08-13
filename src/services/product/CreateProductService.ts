import { AppDataSource } from "../../database";
import { Message } from "../../entities/Message";
import { validate } from "class-validator";

interface IMessage {
	email: string;
	message: string;
}

class CreateProductService {
	async execute({ email, message }: IMessage) {
		const errors = await validate({ email, message });

		if (errors.length > 0) {
			throw new Error(`Validation failed!`);
		} else {
			const createMessage = AppDataSource.manager.create(Message, {
				email,
				message,
			});

			const saveMessage = await AppDataSource.manager.save(
				Message,
				createMessage
			);

			return saveMessage;
		}
	}
}

export { CreateProductService };
