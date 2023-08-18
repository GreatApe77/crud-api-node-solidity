
import { config } from "../config";



export async function photoExists(id:number):Promise<boolean>{
    const exists:boolean = await (config.crudContract.methods.photoExists as any)(id).call()

    return exists

}