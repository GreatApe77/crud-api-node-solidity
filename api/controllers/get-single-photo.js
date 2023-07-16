const { FANTOM_TESTNET_RPC_URL, ABI, ADDRESS } = require("../config");
const { Web3 } = require("web3");

const getSinglePhoto = async (req, res) => {
	const { id } = req.params;
	try {
		const web3 = new Web3(FANTOM_TESTNET_RPC_URL);
		const crud = new web3.eth.Contract(ABI, ADDRESS);
		const isValidParam = await crud.methods.photoExists(Number(id)).call();
		if (!isValidParam) {
			return res.status(400).json({ message: "This ID Does not Exist!" });
		}
		const photo = await crud.methods.idToPhoto(Number(id)).call();
		const photoJson = {
			id: Number(photo.id),
			imageUrl: photo.imageUrl,
			description: photo.description,
			timestamp: Number(photo.timestamp),
		};
		res.status(200).json(photoJson);
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: "Internal server error" });
	}
};

module.exports = {
	getSinglePhoto,
};
