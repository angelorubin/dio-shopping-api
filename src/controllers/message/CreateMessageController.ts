import { Request, Response } from "express";
import { CreateMessageService } from "../../services/messages/CreateMessageService";

class CreateMessageController {
	async handle(req: Request, res: Response) {
		const { email, message } = req.body;

		const createMessageService = new CreateMessageService();

		const data = await createMessageService.execute({ email, message });

		return res.json({ data });
	}
}

export { CreateMessageController };
