import { Request, Response } from "express";
import { ClearTableMessagesService } from "../../services/messages/ClearTableMessagesService";

class ClearTableMessagesController {
  async handle(req: Request, res: Response) {
    const clearTableMessagesController = new ClearTableMessagesService();

    const result = await clearTableMessagesController.execute();

    return res.json({ message: result });
  }
}

export { ClearTableMessagesController };
