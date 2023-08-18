
import { Request, Response } from "express";
import uploadIPFS from "../moralis/uploadIPFS";
import { TransactionReceipt } from "web3";
import { createPhoto } from "../smart-contract-methods/create-photo";
const postPhoto = async (req: Request, res: Response) => {
	if (req.file && req.body.description) {
		const buffer = req.file.buffer;
		const base64EncodedBuffer = buffer.toString("base64");

		const description = req.body.description;
		const name = req.file.originalname;

		try {
			const imageUrl = await uploadIPFS(base64EncodedBuffer, name);

			const txReceipt = await createPhoto(imageUrl,description)
			return res.status(201).json({
				success:true,
				message: "Posted a Photo!",
				imageUrl: imageUrl,
				transactionHash: txReceipt.transactionHash
			});
		} catch (error) {
			return res
				.status(500)
				.json({ success: false, message: "Internal Server Error" });
		}
	} else {
		const { imageUrl, description } = req.body;

		try {
			const txReceipt: TransactionReceipt = await createPhoto(imageUrl,description);

			return res.status(201).json({
				success: true,
				message: "Posted a Photo!",
				imageUrl: imageUrl,
				transactionHash: txReceipt.transactionHash,
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
