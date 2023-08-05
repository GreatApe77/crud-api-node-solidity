import express from 'express'
import photosRouter from './routes/photos'

const router = express.Router();

router.use("/photos",photosRouter)

export default router;