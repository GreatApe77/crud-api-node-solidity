const express = require("express");
const photosRouter = require("./routes/photos");

const router = express.Router();

router.use("/photos",photosRouter)


module.exports = router;
