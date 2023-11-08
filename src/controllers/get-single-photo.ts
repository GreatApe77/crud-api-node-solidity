import { Request, Response } from "express";

import { Photo, PhotoJson } from "../@types";
import { photoExists } from "../smart-contract-methods/photo-exists";
import { idToPhoto } from "../smart-contract-methods/id-to-photo";
import { ApiError } from "../helpers/api-errors";

const getSinglePhoto = async (req: Request, res: Response) => {
	const id = Number(req.params.id);

	const photo: Photo = await idToPhoto(id);
	const photoJson: PhotoJson = {
		id: Number(photo.id),
		imageUrl: photo.imageUrl,
		description: photo.description,
		timestamp: Number(photo.timestamp),
	};
	if (photoJson.id === 0) {
		throw new ApiError("Photo not found", 404);
	}
	return res.status(200).json(photoJson);
};

export default getSinglePhoto;
