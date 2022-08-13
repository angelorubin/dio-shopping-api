import { Request, Response } from "express";
import { CreateProductService } from "../../services/product/CreateProductService";

class CreateProductController {
	async handle(req: Request, res: Response) {
		const { email, message } = req.body;

		const createMessageService = new CreateProductService();

		const data = await createMessageService.execute({ email, message });

		return res.json({ data });
	}
}

export { CreateProductController };
