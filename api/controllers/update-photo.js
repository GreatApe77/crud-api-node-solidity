const { Web3 } = require("web3");
const { PRIVATE_KEY, FANTOM_TESTNET_RPC_URL, ABI, ADDRESS } = require("../config");
const HDWalletProvider = require("@truffle/hdwallet-provider")


const updatePhoto = async (req, res) => {
    const {id} = req.params
	const { imageUrl, description } = req.body;
	console.log(req.body)
	try {
		const web3 = new Web3(
			new HDWalletProvider(PRIVATE_KEY, FANTOM_TESTNET_RPC_URL)
		);
		const wallet = web3.eth.accounts.privateKeyToAccount("0x" + PRIVATE_KEY);
		const crud = new web3.eth.Contract(ABI, ADDRESS);
		const tx = await crud.methods
			.updatePhoto(id,imageUrl, description)
			.send({ from: wallet.address });

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