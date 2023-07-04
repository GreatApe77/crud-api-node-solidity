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


app.get("/api/photos",async(req,res)=>{
    //console.log(req)
    const web3 = new Web3(FANTOM_TESTNET_RPC_URL)
    const crud = new web3.eth.Contract(ABI,ADDRESS)
    const photos = await crud.methods.getAllPhotos().call()
    console.log(photos[0].imageUrl)
    console.log(photos[0].description)

    res.send(photos.toString())
    
})

app.listen(PORT,()=>{
    console.log(`Listening at ${PORT}\n URL: http://localhost:${PORT}`)
})


