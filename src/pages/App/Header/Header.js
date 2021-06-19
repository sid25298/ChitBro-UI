import React from 'react'
import { useSelector } from 'react-redux'
import './Header.scss'

const Header = () => {

    const account = useSelector(state => state.contracts.account);

    const handleConnect = () => {
        if (account) {
            navigator.clipboard.writeText(account);
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
