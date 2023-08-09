import { Request, Response } from "express";
import { config } from "../config";
import { Photo, PhotoJson } from "../@types";

const getSinglePhoto = async (req: Request, res: Response) => {
	const { id } = req.params;
	try {
		const isValidParam: boolean = await (
			config.crudContract.methods.photoExists as any
		)(Number(id)).call();

		if (!isValidParam) {
			return res.status(400).json({ message: "This ID Does not Exist!" });
		}
		const photo: Photo = await (config.crudContract.methods.idToPhoto as any)(
			Number(id)
		).call();
		const photoJson: PhotoJson = {
			id: Number(photo.id),
			imageUrl: photo.imageUrl,
			description: photo.description,
			timestamp: Number(photo.timestamp),
		};
		return res.status(200).json(photoJson);
	} catch (error) {
		console.error(error);
		return res.status(500).json({
			success: false,
			message: "Internal server error",
		});
	}
};

export default getSinglePhoto;
