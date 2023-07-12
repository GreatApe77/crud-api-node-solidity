require("dotenv").config()
const Moralis = require("moralis").default;



async function uploadIPFS(base64EncodedPhoto,name){

    const uploadArray = [
        {
            path:name,
            content: base64EncodedPhoto
        }
    ]
    try {
        
        const response = await Moralis.EvmApi.ipfs.uploadFolder({
            abi:uploadArray
        })
        return response.result[0].path
    } catch (error) {
        throw new Error(error)
    }
    
}

module.exports = uploadIPFS