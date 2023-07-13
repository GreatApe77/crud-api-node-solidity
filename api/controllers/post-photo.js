const {
	FANTOM_TESTNET_RPC_URL,
	ABI,
	PRIVATE_KEY,
	ADDRESS,
} = require("../config");
const { Web3 } = require("web3");
const HDWalletProvider = require("@truffle/hdwallet-provider");
const uploadIPFS = require("../moralis/uploadIPFS")
const postPhoto = async (req, res) => {
	if (req.file&& req.body.description) {
		
		const buffer = req.file.buffer
		const base64EncodedBuffer = buffer.toString("base64")
		
		const description = req.body.description
		const name = req.file.originalname
		console.log(base64EncodedBuffer)
		console.log(description)
		
		try {
			const imageUrl = await uploadIPFS(base64EncodedBuffer,name)
			const web3 = new Web3(
				new HDWalletProvider(PRIVATE_KEY, FANTOM_TESTNET_RPC_URL)
			);
			const wallet = web3.eth.accounts.privateKeyToAccount("0x" + PRIVATE_KEY);
			const crud = new web3.eth.Contract(ABI, ADDRESS);

			const tx = await crud.methods
				.createPhoto(imageUrl, description)
				.send({ from: wallet.address });

			if (Boolean(tx)) {
				res.status(201).json({ message: "Posted a Photo!",imageUrl:imageUrl });
			}
		} catch (error) {
			res.status(500).json({success:false,message:"Internal Server Error"})
		}
		
		
	} else {
		const { imageUrl, description } = req.body;

		try {
			const web3 = new Web3(
				new HDWalletProvider(PRIVATE_KEY, FANTOM_TESTNET_RPC_URL)
			);
			const wallet = web3.eth.accounts.privateKeyToAccount("0x" + PRIVATE_KEY);
			const crud = new web3.eth.Contract(ABI, ADDRESS);

			const tx = await crud.methods
				.createPhoto(imageUrl, description)
				.send({ from: wallet.address });

			if (Boolean(tx)) {
				res.status(201).json({ message: "Posted a Photo!" });
			}
		} catch (error) {
			console.error(error);
			res.status(500).json({ message: "Internal server error" });
		}
	}
};

module.exports = {
	postPhoto,
};
