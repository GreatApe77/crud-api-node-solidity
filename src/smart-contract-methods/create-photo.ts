import { config } from "../config";
import { TransactionReceipt } from "web3";


/**
 * o método createPhoto dos smart contract e seus parametros
 * @param imageUrl 
 * @param description 
 * @returns Um objeto do tipo Transactionreceipt contendo os hashs e outras informacoes
 */
export async function createPhoto(imageUrl:string,description:string):Promise<TransactionReceipt>{

    const txReceipt:TransactionReceipt = await (config.crudContract.methods.createPhoto as any)(imageUrl,description).send({from:config.web3Account.address})
    return txReceipt
}