import { getCustomRepository } from "typeorm";
import { MessagesRepository } from "../../repository/MessagesRepository";

interface IMessage {
	email: string;
	message: string;
}

class CreateMessageService {
	async execute({ email, message }: IMessage) {
		const messageRepository = getCustomRepository(MessagesRepository);

		if (!email) {
			throw new Error("Por favor informe um email!");
		}

		if (!message) {
			throw new Error("Por favor escreva uma messagem!");
		}

		const createMessage = messageRepository.create({ email, message });

		const saveMessage = await messageRepository.save(createMessage);

		return saveMessage;
	}
}

export { CreateMessageService };
