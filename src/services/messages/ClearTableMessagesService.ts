import { getCustomRepository } from "typeorm";
import { MessagesRepository } from "../../repository/MessagesRepository";

interface IMessage {
  email: string;
  message: string;
}

class ClearTableMessagesService {
  async execute() {
    const messageRepository = getCustomRepository(MessagesRepository);
  }
}

export { ClearTableMessagesService };
