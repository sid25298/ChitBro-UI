import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import Header from './Header/Header';
import Navbar from '../../components/Navbar/Navbar';
import Dashboard from './Dashboard/Dashboard';
import Chits from './Chits/Chits';
import Auction from './Auction/Auction';
import { Web3Connect } from '../../services';
import { CONTRACTS_SUCCESS } from '../../redux/types';
import './App.scss';
// import { cssTransition, toast } from 'react-toastify';
// import { TOAST_CONFIG } from '../../config/ui';

const App = () => {

  const [tab, setTab] = useState("dashboard");
  const dispatch = useDispatch();

  const HandleConnect = async () => {
    try {
      const [account, contract] = await Web3Connect();
      dispatch({ type: CONTRACTS_SUCCESS, payload: { account, contract } });
    }
    catch (err) {
      console.log(err)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }

  useEffect(() => {
    // toast.configure({
    //   ...TOAST_CONFIG,
    //   transition: cssTransition({
    //     enter: 'toast-slidein',
    //     exit: 'toast-slideout',
    //     duration: [500, 750]
    //   })
    // })
    HandleConnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div>
      <Header />
      {/* <button onClick={() => HandleConnect()}>
        Connect
      </button> */}
      {tab === "dashboard" && <Dashboard />}
      {tab === "chits" && <Chits />}
      {tab === "auction" && <Auction />}
      <Navbar setTab={setTab} tab={tab} />
    </div>
  )
}

export default App
