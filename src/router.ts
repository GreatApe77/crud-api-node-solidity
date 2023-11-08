import express from 'express'
import photosRouter from './routes/photos'
import fs from 'fs'
const router = express.Router();
router.get("/testando", (req, res) => {
    throw new Error("Teste de erro")
    return res.send("Passou do erro")
})
router.use("/photos",photosRouter)

export default router;