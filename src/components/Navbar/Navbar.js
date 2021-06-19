import React from 'react'
import './Navbar.scss'

const Navbar = ({ setTab }) => {

    return (
        <div className="navbar">
            <button onClick={() => setTab("chits")}>
                Chits
            </button>
            <button onClick={() => setTab("dashboard")}>
                Dashboard
            </button>
            <button onClick={() => setTab("auction")}>
                Auctions
            </button>
        </div>
    )
}

export default Navbar
