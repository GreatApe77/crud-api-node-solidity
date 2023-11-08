import { Request, Response } from "express";
import { PhotoJson, Photo } from "../@types";
import { getAllPhotosMethod } from "../smart-contract-methods/get-all-photos";
const getAllPhotos = async (req: Request, res: Response) => {
	//console.log(req)

	const photos: Photo[] = await getAllPhotosMethod();

	const filteredPhotos = photos.filter(
		(photo: Photo) => Number(photo.id) !== 0
	);
	const photosJson: PhotoJson[] = filteredPhotos.map((photo: Photo) => ({
		id: Number(photo.id),
		imageUrl: photo.imageUrl,
		description: photo.description,
		timestamp: Number(photo.timestamp),
	}));

	if (req.query.from || req.query.to) {
		const { from, to } = req.query;
		const slicedPhotosJson = photosJson.slice(Number(from), Number(to));
		return res.status(200).json(slicedPhotosJson);
	}
	return res.status(200).json(photosJson);
};

export default getAllPhotos;
