import { config } from "../config";
import { TransactionReceipt } from "web3";



export async function deletePhotoMethod(id:number):Promise<TransactionReceipt>{

    const txReceipt:TransactionReceipt = await (config.crudContract.methods.deletePhoto as any)(id).send({from:config.web3Account.address})
    return txReceipt
}