const { FANTOM_TESTNET_RPC_URL, ABI,PRIVATE_KEY, ADDRESS } = require("../config");
const {Web3} = require("web3");
const HDWalletProvider = require("@truffle/hdwallet-provider")

const deletePhoto = async(req,res)=>{
	const { id } = req.params;
	try {
		const web3 = new Web3(
			new HDWalletProvider(PRIVATE_KEY, FANTOM_TESTNET_RPC_URL)
		);
		const wallet = web3.eth.accounts.privateKeyToAccount("0x" + PRIVATE_KEY);
		const crud = new web3.eth.Contract(ABI, ADDRESS);
		const tx = await crud.methods
			.deletePhoto(Number(id))
			.send({ from: wallet.address });

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