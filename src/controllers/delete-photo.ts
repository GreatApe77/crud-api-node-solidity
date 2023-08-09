import { Request, Response } from "express";

import { config } from "../config";
import { TransactionReceipt } from "web3";
const deletePhoto = async (req: Request, res: Response) => {
	const { id } = req.params;
	try {
		const tx: TransactionReceipt = await (
			config.crudContract.methods.deletePhoto as any
		)(Number(id)).send({ from: config.web3Account.address });

		return res.status(200).json({
			success: true,
			message: "Deleted a Photo!",
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

export default deletePhoto;