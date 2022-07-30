import { Request, Response } from "express";
import { DeleteMessageService } from "../services/DeleteMessageService";

class DeleteMessageController {
	async handle(req: Request, res: Response) {
		const { id } = req.params;

		const deleteMessageService = new DeleteMessageService();

		const newMessage = await deleteMessageService.execute({ id });

		return res.json({ newMessage });
	}
}

export { DeleteMessageController };
