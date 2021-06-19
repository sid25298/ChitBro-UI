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
    const provider = await web3Modal.connect();
    const web3 = new Web3(provider);
    const accounts = await web3.eth.getAccounts();
    TokenService.setWalletAddress(accounts[0])
}

export default Web3Connect;