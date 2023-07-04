const {
	ADDRESS,
	ABI,
	FANTOM_TESTNET_RPC_URL,
	PRIVATE_KEY,
    PORT
} = require("./config");

const express = require("express");

const app = express();


app.use(express.static("public"))



app.listen(PORT,()=>{
    console.log(`Listening at ${PORT}\n URL: http://localhost:${PORT}`)
})


