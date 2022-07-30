import { Router, Request, Response } from "express";
import { CreateMessageController } from "./controllers/CreateMessageController";
import { ListMessageController } from "./controllers/ListMessageController";
import { DeleteMessageController } from "./controllers/DeleteMessageController";

const router = Router();

const createMessageController = new CreateMessageController();
const listMessageController = new ListMessageController();
const deleteMessageController = new DeleteMessageController();

router.get("/", (req: Request, res: Response) =>
	res.json({ message: "Bem vindo a API do Dio Shopping" })
);

router.get("/message", listMessageController.handle);
router.post("/message", createMessageController.handle);
router.delete("/message/:id", deleteMessageController.handle);

export { router };
