import { Router } from "express";
import {
  createMessageController,
  fetchMessagesController,
  clearTableController,
} from "../controllers/message/messageController";
import {
  createUserController,
  retrieveUserByUuidController,
  updateUserByUuidController,
  deleteUserByUuidController,
} from "../controllers/user/userController";

const router = Router();

// Home Routes
router.get("/", (req, res, next) => {
  res.json({ message: "Welcome to DIO Shopping API" });
});

// Users Routes
router.get("/users", createUserController);
router.get("/users/:uuid", retrieveUserByUuidController);
router.put("/users/:uuid", updateUserByUuidController);
router.delete("/users/:uuid", deleteUserByUuidController);

// Message Routes
router.post("/messages", createMessageController);
router.get("/messages", fetchMessagesController);
router.delete("/messages", clearTableController);

export { router };
