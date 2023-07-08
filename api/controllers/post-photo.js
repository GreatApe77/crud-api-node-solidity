const { FANTOM_TESTNET_RPC_URL, ABI,PRIVATE_KEY, ADDRESS } = require("../config");
const {Web3} = require("web3");
const HDWalletProvider = require("@truffle/hdwallet-provider")

const postPhoto = async (req, res) => {
	const { imageUrl, description } = req.body;
	console.log(req.body)
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

module.exports = {
    postPhoto
}