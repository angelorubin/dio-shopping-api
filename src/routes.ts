import { Router, Request, Response } from "express";
import { CreateMessageController } from "./controllers/message/CreateMessageController";
import { ListMessageController } from "./controllers/message/ListMessageController";
import { DeleteMessageController } from "./controllers/message/DeleteMessageController";
import { ClearTableMessagesController } from "./controllers/message/ClearTableMessagesController";

const router = Router();

const createMessageController = new CreateMessageController();
const listMessageController = new ListMessageController();
const deleteMessageController = new DeleteMessageController();
const clearTableMessagesController = new ClearTableMessagesController();

router.get("/", (req: Request, res: Response) =>
  res.json({ message: "Bem vindo a API do Dio Shopping" })
);

router.get("/messages", listMessageController.handle);
router.post("/messages", createMessageController.handle);
router.delete("/messages/:id", deleteMessageController.handle);
router.delete("clear-table-messages", clearTableMessagesController);

export { router };
