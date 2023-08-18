
import { TransactionReceipt } from "web3";
import { config } from "../config";

export async function updatePhotoMethod(id:number,imageUrl:string,description:string):Promise<TransactionReceipt>{
    const txReceipt: TransactionReceipt = await (
        config.crudContract.methods.updatePhoto as any
    )(id, imageUrl, description).send({ from: config.web3Account.address });

    return txReceipt
}