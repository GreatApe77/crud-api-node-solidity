
import { NextFunction, Request, Response } from "express";

const errorMidleware = async  (err: Error,req :Request,res:Response,next:NextFunction)=>{

    console.log(err);
    res.status(500).json("Caiu no middleware de erro")
}