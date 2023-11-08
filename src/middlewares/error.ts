import { NextFunction, Request, Response } from "express";
import { ApiError } from "../helpers/api-errors";

export const errorMidleware = async (
	err: Error & Partial<ApiError>,
	req: Request,
	res: Response,
	next: NextFunction
) => {
	console.log(err);
	const statusCode = err.statusCode ?? 500;
	const message = err.statusCode ? err.message : "Internal Server Error";
	res.status(statusCode).json({
		success: false,
		message: message,
	});
};
