import { Photo } from "../@types";
import { config } from "../config";



export async function getAllPhotosMethod():Promise<Photo[]>{
    const photos:Photo[] = await (config.crudContract.methods.getAllPhotos as any)().call()

    return photos

}