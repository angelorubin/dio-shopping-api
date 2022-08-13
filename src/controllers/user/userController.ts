import { Request, Response, NextFunction } from "express";
import { createUserService } from "../../services/user/userService";

const createUserController = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	const { firstname, lastname } = req.body;
	const message = await createUserService({ firstname, lastname });
	res.json({ message });
};

export { createUserController };
