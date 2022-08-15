import { Request, Response, NextFunction } from "express";
import {
  createUserService,
  retrieveUserByUuidService,
  updateUserByUuidService,
  deleteUserByUuidService,
} from "../../services/user/userService";

const createUserController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {};

const retrieveUserByUuidController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {};

const updateUserByUuidController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {};

const deleteUserByUuidController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {};

export {
  createUserController,
  retrieveUserByUuidController,
  updateUserByUuidController,
  deleteUserByUuidController,
};
