import axios from 'axios';
import { TokenService } from '../services';

const axiosAuth = axios.create();

axiosAuth.interceptors.request.use((config) => {
    const wallet_address = TokenService.getWalletAddress();
    if (wallet_address) {
        config.headers['wallet_address'] = wallet_address;
    }
    return config;
}, (error) => Promise.reject(error));

export default axiosAuth;