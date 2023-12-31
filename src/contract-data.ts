

export const ADDRESS:string = "0xa1AE06e9D769fb768778FF04E541396f0Ae09370";
export const ABI = [
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
] as const;

