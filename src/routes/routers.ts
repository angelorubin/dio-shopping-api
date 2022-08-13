import { Router } from "express";
import {
	createMessageController,
	fetchMessagesController,
	clearTableController,
} from "../controllers/message/messageController";

import { createUserController } from "../controllers/user/userController";

const router = Router();

// Home Routes
router.get("/", (req, res, next) => {
	res.json({ message: "Welcome to DIO Shopping API" });
});

// Users Routes
router.post("/users", createUserController);

// Message Routes
router.post("/messages", createMessageController);
router.get("/messages", fetchMessagesController);
router.delete("/messages", clearTableController);

export { router };
