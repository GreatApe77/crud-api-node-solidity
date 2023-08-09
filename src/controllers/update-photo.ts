import { Request, Response } from "express";
import { config } from "../config";
import { TransactionReceipt } from "web3";

const updatePhoto = async (req: Request, res: Response) => {
	const { id } = req.params;
	const { imageUrl, description } = req.body;

	try {
		const tx: TransactionReceipt = await (
			config.crudContract.methods.updatePhoto as any
		)(id, imageUrl, description).send({ from: config.web3Account.address });

		return res.status(201).json({
			success: true,
			message: "Updated a Photo!",
			transactionHash: tx.transactionHash,
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
