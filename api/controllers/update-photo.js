
const {crudContract, account } = require("../config");



const updatePhoto = async (req, res) => {
    const {id} = req.params
	const { imageUrl, description } = req.body;
	console.log(req.body)
	try {
		
		const tx = await crudContract.methods
			.updatePhoto(id,imageUrl, description)
			.send({ from: account.address });

		if (Boolean(tx)) {
			res.status(201).json({ message: "Updated a Photo!" });
		}
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: "Internal server error" });
	}
}

module.exports = {
    updatePhoto
}