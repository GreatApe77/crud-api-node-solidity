const { PORT } = require("./config");
const express = require("express");
const router = require("./router");
const multer = require("multer");
const uploadIPFS = require("./moralis/uploadIPFS");
const app = express();
const upload = multer();
require("dotenv").config()
const Moralis = require("moralis").default;
app.use(express.static("public"));
app.use(express.json());
(async ()=>{

    await Moralis.start({
        apiKey:process.env.MORALIS_API_KEY
    })
})()
app.post("/upload", upload.single("file"), async (req, res) => {
	if (req.file) {
		const buffer = req.file.buffer;
		const name = req.file.originalname;
		console.log(req.file.originalname);
		console.log(name);
		//console.log(buffer.toString("base64"))
		const base64EncodedPhoto = buffer.toString("base64");
		//console.log(base64EncodedPhoto);
		try {
			const imageUrl = await uploadIPFS(base64EncodedPhoto,name);

			res.status(200).json({ success: true, uploadedUrl: imageUrl });
		} catch (error) {
			console.error(error);
			res.status(500).send("Deu errado");
		}
		
	} else {
		res.status(500).send("Deu errado");
	}
});
app.use(router);
app.listen(PORT, () => {
	console.log(`Listening at ${PORT}\nURL: http://localhost:${PORT}`);
});
