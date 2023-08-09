import { config } from "../config";
import { Request, Response } from "express";
import uploadIPFS from "../moralis/uploadIPFS";
import { TransactionReceipt } from "web3";
const postPhoto = async (req: Request, res: Response) => {
	if (req.file && req.body.description) {
		const buffer = req.file.buffer;
		const base64EncodedBuffer = buffer.toString("base64");

		const description = req.body.description;
		const name = req.file.originalname;

		try {
			const imageUrl = await uploadIPFS(base64EncodedBuffer, name);

			const tx: TransactionReceipt = await (
				config.crudContract.methods.createPhoto as any
			)(imageUrl, description).send({ from: config.web3Account.address });

			return res.status(201).json({
				success:true,
				message: "Posted a Photo!",
				imageUrl: imageUrl,
				transactionHash: tx.transactionHash
			});
		} catch (error) {
			return res
				.status(500)
				.json({ success: false, message: "Internal Server Error" });
		}
	} else {
		const { imageUrl, description } = req.body;

		try {
			const tx: TransactionReceipt = await (
				config.crudContract.methods.createPhoto as any
			)(imageUrl, description).send({ from: config.web3Account.address });

			return res.status(201).json({
				success: true,
				message: "Posted a Photo!",
				imageUrl: imageUrl,
				transactionHash: tx.transactionHash,
			});
		} catch (error) {
			console.error(error);
			return res.status(500).json({
				success: false,
				message: "Internal server error",
			});
		}
	}
};

export default postPhoto;
