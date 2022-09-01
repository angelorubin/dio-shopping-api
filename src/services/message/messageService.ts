import AppDataSource from "../../database";
import { Message } from "../../entities/Message";
import { validate } from "class-validator";

interface IMessageService {
	email: string;
	message: string;
}

const createMessageService = async ({ email, message }: IMessageService) => {
	const messageValidation = new Message();

	messageValidation.email = email;

	const errors = await validate(messageValidation);

	if (errors.length > 0) {
		return errors;
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
};

const fetchMessagesService = async () => {
	try {
		const messages = await AppDataSource.manager.find(Message);
		return messages;
	} catch (error) {
		return { error, "": "" };
	}
};

const clearTableService = async () =>
	await AppDataSource.manager.clear(Message);

export { createMessageService, fetchMessagesService, clearTableService };
