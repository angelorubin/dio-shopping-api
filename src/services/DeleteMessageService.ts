import { getCustomRepository } from "typeorm";
import { MessagesRepository } from "../repository/MessagesRepository";

interface IMessage {
	id: string;
}

class DeleteMessageService {
	async execute({ id }: IMessage) {
		const messageRepository = getCustomRepository(MessagesRepository);

		if (!id) {
			throw new Error("O id não existe");
		}

		const newMessage = await messageRepository.delete({ id });

		return newMessage;
	}
}

export { DeleteMessageService };
