const express = require("express");
const multer = require("multer")

const { getAllPhotos } = require("../controllers/get-all-photos");
const { getSinglePhoto } = require("../controllers/get-single-photo");
const { postPhoto } = require("../controllers/post-photo");
const { deletePhoto } = require("../controllers/delete-photo");
const {updatePhoto} = require("../controllers/update-photo");
const isAuth = require("../middlewares/authorization");

const photosRouter = express.Router()
const upload = multer()

photosRouter.get("/", getAllPhotos);
photosRouter.get("/:id",getSinglePhoto );
photosRouter.post("/",upload.single("file"), postPhoto);
photosRouter.delete("/:id",isAuth,deletePhoto)
photosRouter.put("/:id",updatePhoto)
module.exports = photosRouter