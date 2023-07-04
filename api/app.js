const {
	ADDRESS,
	ABI,
	FANTOM_TESTNET_RPC_URL,
	PRIVATE_KEY,
    PORT
} = require("./config");
const {Web3} = require("web3")

const express = require("express");

const app = express();


app.use(express.static("public"))


app.get("/photos",async(req,res)=>{
    //console.log(req)
    const web3 = new Web3(FANTOM_TESTNET_RPC_URL)
    const crud = new web3.eth.Contract(ABI,ADDRESS)
    const photos = await crud.methods.getAllPhotos().call()
    const photosJson = []
    for (let i = 0; i < photos.length; i++) {
        
        const photo = {
            id:Number(photos[i].id),
            imageUrl:photos[i].imageUrl,
            description:photos[i].description,
            timestamp:Number(photos[i].timestamp)
        }
        photosJson.push(photo)
    }
    
    console.log(photosJson)

    res.status(200).json(photosJson)
    
})

app.get("/photos/:id",async (req,res)=>{
    const {id} = req.params
    const web3 = new Web3(FANTOM_TESTNET_RPC_URL)
    const crud = new web3.eth.Contract(ABI,ADDRESS)
    const photo = await crud.methods.idToPhoto(Number(id))
    res.send("Sucess")
})

app.listen(PORT,()=>{
    console.log(`Listening at ${PORT}\n URL: http://localhost:${PORT}`)
})


