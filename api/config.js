require("dotenv").config();
const HDWalletProvider = require("@truffle/hdwallet-provider");
const {default:Web3} = require("web3");

const ABI = [
	{
		inputs: [
			{
				internalType: "string",
				name: "imageUrl",
				type: "string",
			},
			{
				internalType: "string",
				name: "description",
				type: "string",
			},
		],
		name: "createPhoto",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "id",
				type: "uint256",
			},
		],
		name: "deletePhoto",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [],
		stateMutability: "nonpayable",
		type: "constructor",
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "id",
				type: "uint256",
			},
			{
				internalType: "string",
				name: "imageUrl",
				type: "string",
			},
			{
				internalType: "string",
				name: "description",
				type: "string",
			},
		],
		name: "updatePhoto",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [],
		name: "getAllPhotos",
		outputs: [
			{
				components: [
					{
						internalType: "string",
						name: "imageUrl",
						type: "string",
					},
					{
						internalType: "string",
						name: "description",
						type: "string",
					},
					{
						internalType: "uint256",
						name: "id",
						type: "uint256",
					},
					{
						internalType: "uint256",
						name: "timestamp",
						type: "uint256",
					},
				],
				internalType: "struct Crud.Photo[]",
				name: "",
				type: "tuple[]",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [],
		name: "idCounter",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256",
			},
		],
		name: "idToPhoto",
		outputs: [
			{
				internalType: "string",
				name: "imageUrl",
				type: "string",
			},
			{
				internalType: "string",
				name: "description",
				type: "string",
			},
			{
				internalType: "uint256",
				name: "id",
				type: "uint256",
			},
			{
				internalType: "uint256",
				name: "timestamp",
				type: "uint256",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [],
		name: "owner",
		outputs: [
			{
				internalType: "address",
				name: "",
				type: "address",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256",
			},
		],
		name: "photoExists",
		outputs: [
			{
				internalType: "bool",
				name: "",
				type: "bool",
			},
		],
		stateMutability: "view",
		type: "function",
	},
];

const ADDRESS = "0xa1AE06e9D769fb768778FF04E541396f0Ae09370";


const FANTOM_TESTNET_RPC_URL = process.env.FANTOM_TESTNET_RPC_URL || "https://rpc.ankr.com/fantom_testnet/"

const PRIVATE_KEY = process.env.PRIVATE_KEY
const PORT = process.env.PORT ||8080
const PASSWORD = process.env.PASSWORD
const MORALIS_API_KEY = process.env.MORALIS_API_KEY

const web3 = new Web3(new HDWalletProvider(PRIVATE_KEY,FANTOM_TESTNET_RPC_URL))
const account = web3.eth.accounts.privateKeyToAccount("0x"+PRIVATE_KEY)
const crudContract = new web3.eth.Contract(ABI,ADDRESS)


module.exports = {
	crudContract,
	account,
	PORT,
	MORALIS_API_KEY,
	PASSWORD
}

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