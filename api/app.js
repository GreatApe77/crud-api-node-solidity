const {
	ADDRESS,
	ABI,
	FANTOM_TESTNET_RPC_URL,
	PRIVATE_KEY,
    PORT
} = require("./config");
const {Web3} = require("web3")
const HDWalletProvider = require("@truffle/hdwallet-provider")
const express = require("express");


const app = express();


app.use(express.static("public"))
app.use(express.json())

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
app.post("/photos",async (req,res)=>{
    const {imageUrl,description} = req.body
    try {
        const web3 = new Web3(new HDWalletProvider(PRIVATE_KEY,FANTOM_TESTNET_RPC_URL))
        const wallet = web3.eth.accounts.privateKeyToAccount("0x"+PRIVATE_KEY);
        const crud = new web3.eth.Contract(ABI,ADDRESS)
        const tx = await crud.methods.createPhoto(imageUrl,description).send({from:wallet.address})

        if(Boolean(tx)){
            res.status(201).json({message:"Updated a Photo!"})
        }        
    } catch (error) {
        console.error(error)
        res.status(500).json({message:"Internal server error"})
    }
    

})
app.put("/photos/:id",async (req,res)=>{
    const {id} = req.params
    const {imageUrl,description} = req.body
    try {
        const web3 = new Web3(new HDWalletProvider(PRIVATE_KEY,FANTOM_TESTNET_RPC_URL))
        const wallet = web3.eth.accounts.privateKeyToAccount("0x"+PRIVATE_KEY);
        const crud = new web3.eth.Contract(ABI,ADDRESS)
        const tx = await crud.methods.updatePhoto(Number(id),imageUrl,description).send({from:wallet.address})

        if(Boolean(tx)){
            res.status(201).json({message:"Posted a Photo!"})
        }        
    } catch (error) {
        console.error(error)
        res.status(500).json({message:"Internal server error"})
    }
    

})
app.get("/photos/:id",async (req,res)=>{
    const {id} = req.params
    const web3 = new Web3(FANTOM_TESTNET_RPC_URL)
    const crud = new web3.eth.Contract(ABI,ADDRESS)
    const isValidParam = await crud.methods.photoExists(Number(id)).call()
    if(!isValidParam){
        return res.status(400).json({message:"This ID Does not Exist!"})
    }
    const photo = await crud.methods.idToPhoto(Number(id)).call()
    const photoJson = {
        id:Number(photo.id),
        imageUrl:photo.imageUrl,
        description:photo.description,
        timestamp:Number(photo.timestamp)
    }
    res.status(200).json(photoJson)
})

app.listen(PORT,()=>{
    console.log(`Listening at ${PORT}\n URL: http://localhost:${PORT}`)
})


