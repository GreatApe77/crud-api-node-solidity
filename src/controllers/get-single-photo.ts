import { Request, Response } from "express";
import { config } from "../config";
import { Photo, PhotoJson } from "../@types";
import { photoExists } from "../smart-contract-methods/photo-exists";
import { idToPhoto } from "../smart-contract-methods/id-to-photo";

const getSinglePhoto = async (req: Request, res: Response) => {
	const id = Number(req.params.id);
	try {
		const isValidParam: boolean = await photoExists(id);
		if (!isValidParam) {
			return res.status(400).json({ 
				success:false,
				message: "This ID Does not Exist!"
			 });
		}
		const photo: Photo = await idToPhoto(id);
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
