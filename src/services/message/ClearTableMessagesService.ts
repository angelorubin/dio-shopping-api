import { AppDataSource } from "../../database";
import { Message } from "../../entities/Message";

class ClearTableMessagesService {
	async execute() {
		const res = await AppDataSource.manager.clear(Message);
		return res;
	}
}

export { ClearTableMessagesService };
