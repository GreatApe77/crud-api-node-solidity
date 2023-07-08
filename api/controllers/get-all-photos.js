const { FANTOM_TESTNET_RPC_URL, ABI, ADDRESS } = require("../config");
const {Web3} = require("web3");


const getAllPhotos =  async (req, res) => {
	//console.log(req)
	const web3 = new Web3(FANTOM_TESTNET_RPC_URL);
	const crud = new web3.eth.Contract(ABI, ADDRESS);
	const photos = await crud.methods.getAllPhotos().call();
	const photosJson = [];
	for (let i = 0; i < photos.length; i++) {
		const photo = {
			id: Number(photos[i].id),
			imageUrl: photos[i].imageUrl,
			description: photos[i].description,
			timestamp: Number(photos[i].timestamp),
		};
		if(photo.id!==0){

			photosJson.push(photo);
		}
	}

	console.log(photosJson);

	res.status(200).json(photosJson);
};

module.exports = {
    getAllPhotos
}