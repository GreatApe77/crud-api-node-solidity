const { crudContract } = require("../config");


const getSinglePhoto = async (req, res) => {
	const { id } = req.params;
	try {
		
		
		const isValidParam = await crudContract.methods.photoExists(Number(id)).call();
		if (!isValidParam) {
			return res.status(400).json({ message: "This ID Does not Exist!" });
		}
		const photo = await crudContract.methods.idToPhoto(Number(id)).call();
		const photoJson = {
			id: Number(photo.id),
			imageUrl: photo.imageUrl,
			description: photo.description,
			timestamp: Number(photo.timestamp),
		};
		return res.status(200).json(photoJson);
	} catch (error) {
		console.error(error);
		return res.status(500).json({ message: "Internal server error" });
	}
};

module.exports = {
	getSinglePhoto,
};
