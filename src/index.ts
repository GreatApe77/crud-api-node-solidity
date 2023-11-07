import {config} from './config'
import morgan from "morgan"
import express from 'express'
import router from './router'
import Moralis from "moralis"
(async ()=>{

    await Moralis.start({
        apiKey:config.MORALIS_API_KEY
    })
})()

const app = express()
app.use(morgan("tiny"))
app.use(express.static("frontend/dist"))
app.use(express.json())

app.use(router)
app.get("/*",(req,res)=>{
    res.sendFile("frontend/dist/index.html",{root:"."})
})
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