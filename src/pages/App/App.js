import React, { useEffect, useState } from 'react'
import Navbar from '../../components/Navbar/Navbar';
import Dashboard from './Dashboard/Dashboard';
import Chits from './Chits/Chits';
import Auction from './Auction/Auction';
import { Web3Connect } from '../../services';
import './App.scss';

const App = () => {

  const [tab, setTab] = useState("dashboard")

  const HandleConnect = async () => {
    try {
      await Web3Connect();
    }
    catch (err) {
      console.log("Error")
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }

  useEffect(() => {
    HandleConnect();
  }, [])

  return (
    <div>
      {/* <button onClick={() => HandleConnect()}>
        Connect
      </button> */}
      {tab === "dashboard" && <Dashboard />}
      {tab === "chits" && <Chits />}
      {tab === "auction" && <Auction />}
      <Navbar setTab={setTab} />
    </div>
  )
}

export default App
