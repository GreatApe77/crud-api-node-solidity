import dotenv from "dotenv";
import {  Web3 } from "web3";
import { ABI, ADDRESS } from "./contract-data";
import HDWalletProvider = require("@truffle/hdwallet-provider");
dotenv.config();
const FANTOM_TESTNET_RPC_URL =
	process.env.FANTOM_TESTNET_RPC_URL || "https://rpc.ankr.com/fantom_testnet/";

const PRIVATE_KEY = process.env.PRIVATE_KEY;
const PORT = process.env.PORT || 8080;
const PASSWORD = process.env.PASSWORD;
const MORALIS_API_KEY = process.env.MORALIS_API_KEY;

const web3 = new Web3(new HDWalletProvider(PRIVATE_KEY!,FANTOM_TESTNET_RPC_URL!) as any);

const web3Account = web3.eth.accounts.privateKeyToAccount(
	"0x"+ String(PRIVATE_KEY)
);
//const wallet = web3.eth.accounts.wallet.add(web3Account);

const crudContract= new web3.eth.Contract(ABI, ADDRESS);

export const config = {
	web3,
	web3Account,
	PORT,
	crudContract,
	PASSWORD,
	MORALIS_API_KEY
};

//const account = web3.eth.accounts.privateKeyToAccount("0x"+PRIVATE_KEY)
//const crudContract = new web3.eth.Contract(ABI,ADDRESS)

/*
module.exports = {
	ABI,
	ADDRESS,
	FANTOM_TESTNET_RPC_URL: process.env.FANTOM_TESTNET_RPC_URL,
	PRIVATE_KEY: , // use a test account. for preventing permanent fund loss
	PORT: process.env.PORT || 8080,
	PASSWORD: process.env.PASSWORD,
	MORALIS_API_KEY:process.env.MORALIS_API_KEY
};
*/
