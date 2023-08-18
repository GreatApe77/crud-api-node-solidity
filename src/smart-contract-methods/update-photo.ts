
import { TransactionReceipt } from "web3";
import { config } from "../config";

/**
 * o método updatePhoto do smart contract e seus parametros
 * @param id id da foto
 * @param imageUrl novo url da imagem
 * @param description nova descricao da imagem
 * @returns um objeto TransactionReceipt
 */
export async function updatePhotoMethod(id:number,imageUrl:string,description:string):Promise<TransactionReceipt>{
    const txReceipt: TransactionReceipt = await (
        config.crudContract.methods.updatePhoto as any
    )(id, imageUrl, description).send({ from: config.web3Account.address });

    return txReceipt
}