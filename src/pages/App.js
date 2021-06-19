import React, { useEffect } from 'react'
import Navbar from '../components/Navbar/Navbar';
import { Web3Connect } from '../services';
import './App.css';

const App = () => {

  useEffect(() => {

    setTimeout(Web3Connect.connectFunc(), 5000)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div>
      <Navbar />
    </div>
  )
}

export default App
