import { config } from "../config";
import { TransactionReceipt } from "web3";



export async function createPhoto(imageUrl:string,description:string):Promise<TransactionReceipt>{

    const txReceipt:TransactionReceipt = await (config.crudContract.methods.createPhoto as any)(imageUrl,description).send({from:config.web3Account.address})
    return txReceipt
}