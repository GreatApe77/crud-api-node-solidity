import { Photo } from "../@types";
import { config } from "../config";


/**
 * o método getAllPhotos dos smart contract e seus parametros
 * @returns Retorna um Array do struct Photo do contrato
 */
export async function getAllPhotosMethod():Promise<Photo[]>{
    const photos:Photo[] = await config.crudContract.methods.getAllPhotos().call()

    return photos

}