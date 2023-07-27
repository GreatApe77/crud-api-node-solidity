const { crudContract } = require("../config");

const getAllPhotos = async (req, res) => {
	//console.log(req)
	try {
		const photos = await crudContract.methods.getAllPhotos().call();

		const filteredPhotos = photos.filter((photo) => Number(photo.id) !== 0);
		const photosJson = filteredPhotos.map((photo) => ({
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
	} catch (error) {
		console.error(error);
		return res.status(500).json({ message: "Internal server error" });
	}
};

module.exports = {
	getAllPhotos,
};
