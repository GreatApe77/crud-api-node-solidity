
import express, { Router } from 'express'

import multer from 'multer';
import getAllPhotos from '../controllers/get-all-photos';
import getSinglePhoto from '../controllers/get-single-photo';
import updatePhoto from '../controllers/update-photo';
import deletePhoto from '../controllers/delete-photo';
import isAuth from '../middlewares/authorization';

const photosRouter:Router = express.Router()
const upload = multer()


//route managing (por enquanto so todas as fotos)

photosRouter.get("/",getAllPhotos)
photosRouter.get("/:id",getSinglePhoto)
photosRouter.put("/:id",updatePhoto)
photosRouter.delete("/:id",isAuth,deletePhoto)

export default photosRouter
/*const express = require("express");
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
*/