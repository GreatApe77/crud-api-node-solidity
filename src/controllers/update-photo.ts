import { Request, Response } from "express";
import { TransactionReceipt } from "web3";
import { updatePhotoMethod } from "../smart-contract-methods/update-photo";

const updatePhoto = async (req: Request, res: Response) => {
	const { id } = req.params;
	const { imageUrl, description } = req.body;

	try {
		const txReceipt: TransactionReceipt = await updatePhotoMethod(Number(id),imageUrl,description)

		return res.status(201).json({
			success: true,
			message: "Updated a Photo!",
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

export default updatePhoto;
