import * as Cookies from 'js-cookie';

const TokenService = {
    setWalletAddress: (wallet_address) => {
        Cookies.set('wallet_address', wallet_address);
    },
    getWalletAddress: () => {
        return Cookies.get('wallet_address');
    },
    clearAll: (data) => {
        Cookies.remove('wallet_address');
    },
    isAuthenticated: (data) => {
        return !!(Cookies.get('wallet_address'));
    },
}

export default TokenService;