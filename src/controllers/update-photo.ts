
import { Request,Response } from "express";
import { config } from "../config";
import { TransactionReceipt } from "web3";



const updatePhoto = async (req:Request, res:Response) => {
    const {id} = req.params
	const { imageUrl, description } = req.body;
	
	try {
		
		const tx:TransactionReceipt = await (config.crudContract.methods
			.updatePhoto as any)(id,imageUrl, description)
			.send({from:config.web3Account.address});

		if (tx) {
			res.status(201).json({ message: "Updated a Photo!" });
		}
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: "Internal server error" });
	}
}

export default updatePhoto