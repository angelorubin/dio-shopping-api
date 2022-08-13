import { Request, Response } from "express";
import { ListMessageService } from "../../services/message/ListMessagesService";

class ListMessageController {
	async handle(req: Request, res: Response) {
		const listMessageService = new ListMessageService();

		const messages = await listMessageService.execute();

		return res.json(messages);
	}
}

export { ListMessageController };
