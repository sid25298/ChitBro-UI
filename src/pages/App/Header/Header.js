import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { CONTRACTS_SUCCESS } from '../../../redux/types';
import { Web3Connect } from '../../../services';
import './Header.scss'

const Header = () => {

    const account = useSelector(state => state.contracts.account);
    const dispatch = useDispatch();

    const handleW3Connect = async () => {
        try {
            const [account, contract] = await Web3Connect();
            dispatch({ type: CONTRACTS_SUCCESS, payload: { account, contract } });
        }
        catch (err) {
            console.log(err)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }

    const handleConnect = () => {
        if (account) {
            navigator.clipboard.writeText(account);
        }
        else {
            handleW3Connect();
        }
    }

    return (
        <div className="header">
            <div>ChitBro</div>
            <button onClick={handleConnect} title={account ? "Copy to Clipboard" : "Connect"}>{account || "Connect"}</button>
        </div>
    )
}

export default Header
