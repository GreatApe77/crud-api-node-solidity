const { crudContract } = require("../config");

const getAllPhotos = async (req, res) => {
	//console.log(req)
	try {

		const photos = await crudContract.methods.getAllPhotos().call();
		const photosJson = [];
		for (let i = 0; i < photos.length; i++) {
			const photo = {
				id: Number(photos[i].id),
				imageUrl: photos[i].imageUrl,
				description: photos[i].description,
				timestamp: Number(photos[i].timestamp),
			};
			if (photo.id !== 0) {
				photosJson.push(photo);
			}
		}
		res.status(200).json(photosJson);
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: "Internal server error" });
	}
};

module.exports = {
	getAllPhotos,
};
