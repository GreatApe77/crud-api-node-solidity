import { config } from "../config";
import { TransactionReceipt } from "web3";


/**
 * o método deletePhoto dos smart contract e seus parametros
 * @param id id da foto a ser deletada
 * @returns Um objeto do tipo Transactionreceipt contendo os hashs e outras informacoes
 */
export async function deletePhotoMethod(id:number):Promise<TransactionReceipt>{

    const txReceipt:TransactionReceipt = await config.crudContract.methods.deletePhoto(id).send({from:config.web3Account.address})
    return txReceipt
}