const { PORT } = require("./config");
const express = require("express");
const router = require("./router");
const multer = require("multer");
const app = express();
const Moralis = require("moralis").default;
app.use(express.static("public"));
app.use(express.json());
(async ()=>{

    await Moralis.start({
        apiKey:process.env.MORALIS_API_KEY
    })
})()

app.use(router);
app.listen(PORT, () => {
	console.log(`Listening at ${PORT}\nURL: http://localhost:${PORT}`);
});
