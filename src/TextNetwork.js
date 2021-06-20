export const addressDeployed = "0xe54a97f322eFc567f571090C6ac199745E81dD61";
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
                "internalType": "uint256",
                "name": "createdAt",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "nextPaymentDate",
                "type": "uint256"
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
                "internalType": "uint256",
                "name": "installment",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "accumulatedFund",
                "type": "uint256"
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
        "name": "contribute",
        "outputs": [

        ],
        "stateMutability": "payable",
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
                "internalType": "uint256",
                "name": "createdAt",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "nextPaymentDate",
                "type": "uint256"
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
        "outputs": [

        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [

        ],
        "name": "fundBalance",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [

        ],
        "name": "getAll",
        "outputs": [
            {
                "components": [
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
                        "internalType": "uint256",
                        "name": "createdAt",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "nextPaymentDate",
                        "type": "uint256"
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
                    },
                    {
                        "internalType": "address[]",
                        "name": "contributors",
                        "type": "address[]"
                    },
                    {
                        "internalType": "address payable[]",
                        "name": "participantsToBePaid",
                        "type": "address[]"
                    },
                    {
                        "internalType": "uint256",
                        "name": "installment",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "accumulatedFund",
                        "type": "uint256"
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
            }
        ],
        "name": "getCollateral",
        "outputs": [
            {
                "components": [
                    {
                        "internalType": "uint256",
                        "name": "unusedCollateral",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "usedCollateral",
                        "type": "uint256"
                    }
                ],
                "internalType": "struct ChitManager.CollateralStruct",
                "name": "",
                "type": "tuple"
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
            }
        ],
        "name": "getMyChits",
        "outputs": [
            {
                "components": [
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
                        "internalType": "uint256",
                        "name": "createdAt",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "nextPaymentDate",
                        "type": "uint256"
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
                    },
                    {
                        "internalType": "address[]",
                        "name": "contributors",
                        "type": "address[]"
                    },
                    {
                        "internalType": "address payable[]",
                        "name": "participantsToBePaid",
                        "type": "address[]"
                    },
                    {
                        "internalType": "uint256",
                        "name": "installment",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "accumulatedFund",
                        "type": "uint256"
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
        "name": "getRequiredCollateral",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "chitId",
                "type": "uint256"
            }
        ],
        "name": "getTotalChitAccumulatedAmount",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
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
        "outputs": [

        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_modulus",
                "type": "uint256"
            }
        ],
        "name": "randMod",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "chitId",
                "type": "uint256"
            }
        ],
        "name": "releaseFunds",
        "outputs": [

        ],
        "stateMutability": "nonpayable",
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
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "submitCollateralToChit",
        "outputs": [

        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_walletId",
                "type": "address"
            }
        ],
        "name": "submitUnusedCollateral",
        "outputs": [

        ],
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "chitId",
                "type": "uint256"
            }
        ],
        "name": "viewContributors",
        "outputs": [
            {
                "internalType": "address[]",
                "name": "",
                "type": "address[]"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    }
]