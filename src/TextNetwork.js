export const addressDeployed = "0xEB25305B7BE3849ED4Bb7Bfc4b6957AAd13F4E82";
export const abiDeployed = [
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "chits",
        "outputs": [
            {
                "internalType": "address",
                "name": "chitOwner",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "chitId",
                "type": "uint256"
            },
            {
                "internalType": "string",
                "name": "chitName",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "createdAt",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "nextPaymentDate",
                "type": "string"
            },
            {
                "internalType": "uint256",
                "name": "roomCapacity",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "timePeriod",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "poolAmount",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "chitDuration",
                "type": "uint256"
            },
            {
                "internalType": "bool",
                "name": "roomFilled",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_walletId",
                "type": "address"
            },
            {
                "internalType": "string",
                "name": "chitName",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "createdAt",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "nextPaymentDate",
                "type": "string"
            },
            {
                "internalType": "uint256",
                "name": "roomCapacity",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "timePeriod",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "poolAmount",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "chitDuration",
                "type": "uint256"
            }
        ],
        "name": "createChit",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getAll",
        "outputs": [
            {
                "components": [
                    {
                        "internalType": "address",
                        "name": "chitOwner",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "chitId",
                        "type": "uint256"
                    },
                    {
                        "internalType": "string",
                        "name": "chitName",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "createdAt",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "nextPaymentDate",
                        "type": "string"
                    },
                    {
                        "internalType": "uint256",
                        "name": "roomCapacity",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "timePeriod",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "poolAmount",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "chitDuration",
                        "type": "uint256"
                    },
                    {
                        "internalType": "bool",
                        "name": "roomFilled",
                        "type": "bool"
                    },
                    {
                        "internalType": "address[]",
                        "name": "participants",
                        "type": "address[]"
                    }
                ],
                "internalType": "struct ChitManager.Chit[]",
                "name": "",
                "type": "tuple[]"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_walletId",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "chitId",
                "type": "uint256"
            }
        ],
        "name": "joinChit",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }
]