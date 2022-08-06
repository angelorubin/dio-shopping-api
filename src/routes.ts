import { Router, Request, Response } from "express";
import { CreateMessageController } from "./controllers/message/CreateMessageController";
import { ListMessageController } from "./controllers/message/ListMessageController";
import { DeleteMessageController } from "./controllers/message/DeleteMessageController";

const router = Router();

const createMessageController = new CreateMessageController();
const listMessageController = new ListMessageController();
const deleteMessageController = new DeleteMessageController();

router.get("/", (req: Request, res: Response) =>
	res.json({ message: "Bem vindo a API do Dio Shopping" })
);

router.get("/messages", listMessageController.handle);
router.post("/messages", createMessageController.handle);
router.delete("/messages/:id", deleteMessageController.handle);

export { router };
