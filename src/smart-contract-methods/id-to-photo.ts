import { Photo } from "../@types";
import { config } from "../config";


/**
 * o método idToPhoto do smart contract e seus parametros
 * @param id id da foto
 * @returns uma struct Photo do contrato
 */
export async function idToPhoto(id:number):Promise<Photo>{
    const photo:Photo = await (config.crudContract.methods.idToPhoto as any)(id).call()

    return photo

}