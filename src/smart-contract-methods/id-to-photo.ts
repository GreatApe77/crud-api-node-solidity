import { Photo } from "../@types";
import { config } from "../config";



export async function idToPhoto(id:number):Promise<Photo>{
    const photo:Photo = await (config.crudContract.methods.idToPhoto as any)(id).call()

    return photo

}