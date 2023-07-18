
const {crudContract, account} = require("../config");

const deletePhoto = async(req,res)=>{
	const { id } = req.params;
	try {

		const tx = await crudContract.methods
			.deletePhoto(Number(id))
			.send({ from: account.address });

		if (Boolean(tx)) {
			res.status(200).json({ message: "Deleted a Photo!" });
		}
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: "Internal server error" });
	}
}

module.exports = {
    deletePhoto
}