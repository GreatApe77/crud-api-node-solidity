import { NextFunction, Request, Response } from "express";
import { config } from "../config";

const isAuth = (req: Request, res: Response, next: NextFunction) => {
	const password = req.headers.authorization;

	if (password !== config.PASSWORD) {
		return res.status(401).json({
			success: false,
			message:
				"Unauthorized.Please provide a valid authorization token! Apenas GreatApe77 sabe a senha!",
		});
	}

	next();
};

export default isAuth;
