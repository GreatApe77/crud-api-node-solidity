import { Request, Response } from "express";

import { TransactionReceipt } from "web3";
import { deletePhotoMethod } from "../smart-contract-methods/delete-photo";
const deletePhoto = async (req: Request, res: Response) => {
	const { id } = req.params;
	try {
		const txReceipt: TransactionReceipt = await deletePhotoMethod(Number(id))

		return res.status(200).json({
			success: true,
			message: "Deleted a Photo!",
			transactionHash: txReceipt.transactionHash,
		});
	} catch (error) {
		console.error(error);
		return res.status(500).json({
			success: false,
			message: "Internal server error",
		});
	}
};

export default deletePhoto;
