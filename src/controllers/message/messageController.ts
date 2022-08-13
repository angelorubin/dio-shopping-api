import { Request, Response, NextFunction } from "express";
import {
	clearTableService,
	createMessageService,
	fetchMessagesService,
} from "../../services/message/messageService";

const fetchMessagesController = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	const messages = await fetchMessagesService();
	res.json({ messages });
};

const createMessageController = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	const { email, message } = req.body;
	const resp = await createMessageService({ email, message });
	res.json({ resp });
};

const clearTableController = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	const message = await clearTableService();
	res.json({ message });
};

export {
	createMessageController,
	fetchMessagesController,
	clearTableController,
};
