const {

    PORT
} = require("./config");

const express = require("express");

const router = require("./router");



const app = express();


app.use(express.static("public"))
app.use(express.json())

app.use(router)


app.listen(PORT,()=>{
    console.log(`Listening at ${PORT}\n URL: http://localhost:${PORT}`)
})


