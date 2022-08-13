import { Request, Response } from "express";
import { ClearTableMessagesService } from "../../services/message/ClearTableMessagesService";

class ClearTableMessagesController {
	async handle(req: Request, res: Response) {
		const clearTableMessagesController = new ClearTableMessagesService();

		const message = await clearTableMessagesController.execute();

		return res.json({ message });
	}
}

export { ClearTableMessagesController };
