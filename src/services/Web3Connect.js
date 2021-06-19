import Web3 from "web3";
import Web3Modal from "web3modal";
import TokenService from '../services/TokenService';

const providerOptions = {};

const web3Modal = new Web3Modal({
    network: "mainnet", // optional
    cacheProvider: true, // optional
    providerOptions // required
});

const Web3Connect = async () => {
    try {
        const provider = await web3Modal.connect();
        const web3 = new Web3(provider);
        const accounts = await web3.eth.getAccounts();
        if (accounts[0]) {
            TokenService.setWalletAddress(accounts[0])
        }
    }
    catch (err) {
        TokenService.clearAll();
        throw err;
    }
}

export default Web3Connect;