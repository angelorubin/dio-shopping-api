import { Request, Response } from "express";
import { CreateMessageService } from "../services/CreateMessageService";

class CreateMessageController {
	async handle(req: Request, res: Response) {
		const { email, message } = req.body;

		const createMessageService = new CreateMessageService();

		const newMessage = await createMessageService.execute({ email, message });

		return res.json(newMessage);
	}
}

export { CreateMessageController }