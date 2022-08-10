import { getCustomRepository } from "typeorm";
import { MessagesRepository } from "../../repository/MessagesRepository";

interface IMessage {}

class ClearTableMessagesService {
  async execute() {
    const messageRepository = getCustomRepository(MessagesRepository);
    const res = await messageRepository.clear();
    return res;
  }
}

export { ClearTableMessagesService };
