import express from 'express'
import photosRouter from './routes/photos'
import fs from 'fs'
import { ApiError } from './helpers/api-errors';
const router = express.Router();
router.post("/testando", (req, res) => {
    const {palavra} = req.body
    if(palavra !== "teste"){
        throw new ApiError("Bad request",400)

    }
    return res.send("Passou do erro")
})
router.use("/photos",photosRouter)

export default router;