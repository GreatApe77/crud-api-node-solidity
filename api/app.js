const { PORT } = require("./config");
const express = require("express");
const router = require("./router");
const multer = require("multer")
const app = express();
	const upload = multer()
//app.use(express.static("public"));
//app.use(express.json());


app.post("/upload",upload.single("file"),(req,res)=>{
	
	if(req.file){
		
		const buffer = req.file.buffer
		const name = req.file.originalname
		console.log(req.file.originalname)
		console.log(name)
		//console.log(buffer.toString("base64"))
		res.send("Deu certo")
	}else{
		res.status(500).send("Deu errado")
	}
})
//app.use(router);
app.listen(PORT, () => {
	console.log(`Listening at ${PORT}\nURL: http://localhost:${PORT}`);
});
