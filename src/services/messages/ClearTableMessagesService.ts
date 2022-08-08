import { getCustomRepository } from "typeorm";
import { MessagesRepository } from "../../repository/MessagesRepository";

interface IMessage {}

class ClearTableMessagesService {
  async execute() {
    const messageRepository = getCustomRepository(MessagesRepository);
    const res = await messageRepository.query(`DELETE * from message`);
    return res;
  }
}

export { ClearTableMessagesService };
