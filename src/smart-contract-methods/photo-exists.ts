
import { config } from "../config";


/**
 * o método photoExists do smart contract e seus parametros
 * @param id id da foto
 * @returns true se a foto existir e falso se ela nao existir
 */
export async function photoExists(id:number):Promise<boolean>{
    const exists:boolean = await config.crudContract.methods.photoExists(id).call()

    return exists

}