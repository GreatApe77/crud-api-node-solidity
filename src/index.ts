import {config} from './config'

import express from 'express'
import router from './router'


const app = express()

app.use(express.static("public"))
app.use(express.json())

app.use(router)

app.listen(config.PORT,()=>{
    console.log(`Listening at ${config.PORT}\nURL: http://localhost:${config.PORT}`);
})
/*
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
*/