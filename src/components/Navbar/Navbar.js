import React from 'react'
import './Navbar.scss'

const Navbar = ({ tab, setTab }) => {

    return (
        <div className="navbar">
            <button className={tab === "chits" && "selected"} onClick={() => setTab("chits")}>
                Chits
            </button>
            <button className={tab === "dashboard" && "selected"} onClick={() => setTab("dashboard")}>
                Dashboard
            </button>
            <button className={tab === "auction" && "selected"} onClick={() => setTab("auction")}>
                Auctions
            </button>
        </div>
    )
}

export default Navbar
