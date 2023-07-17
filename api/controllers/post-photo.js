
const { crudContract, account } = require("../config");
const uploadIPFS = require("../moralis/uploadIPFS")
const postPhoto = async (req, res) => {
	if (req.file&& req.body.description) {
		
		const buffer = req.file.buffer
		const base64EncodedBuffer = buffer.toString("base64")
		
		const description = req.body.description
		const name = req.file.originalname

		
		try {
			const imageUrl = await uploadIPFS(base64EncodedBuffer,name)

			const tx = await crudContract.methods
				.createPhoto(imageUrl, description)
				.send({ from: account.address });

			if (Boolean(tx)) {
				return res.status(201).json({ message: "Posted a Photo!",imageUrl:imageUrl });
			}
		} catch (error) {
			return res.status(500).json({success:false,message:"Internal Server Error"})
		}
		
		
	} else {
		const { imageUrl, description } = req.body;

		try {
			
			const tx = await crudContract.methods
				.createPhoto(imageUrl, description)
				.send({ from: account.address });

			if (Boolean(tx)) {
				res.status(201).json({ message: "Posted a Photo!" });
			}
		} catch (error) {
			console.error(error);
			return res.status(500).json({ message: "Internal server error" });
		}
	}
};

module.exports = {
	postPhoto,
};
