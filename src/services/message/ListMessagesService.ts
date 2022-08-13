import { AppDataSource } from "../../database";
import { Message } from "../../entities/Message";

class ListMessageService {
	async execute() {
		const messages = await AppDataSource.manager.find(Message);
		return messages;
	}
}

export { ListMessageService };

// const myDataSource = new DataSource(/*...*/);
// const user = await myDataSource.manager.findOneBy(User, {
// id: 1,
// });
// user.name = "Umed";
// await myDataSource.manager.save(user);
