import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import getMyChits from '../../../redux/actions/getMyChits';
import Card from './Card/Card';
import "./Dashboard.scss"
import rocketLogo from "../../../assets/rocketLogo.png"

const Dashboard = () => {

    const dispatch = useDispatch();
    const myChits = useSelector(state => state.myChits.data);
    const account = useSelector(state => state.contracts.account);

    useEffect(() => {
        const handleGetMyChits = async () => {
            await dispatch(getMyChits());
        }
        if (account) {
            handleGetMyChits();
        }
    }, [dispatch, account])

    return (
        <div className="page-wrap dashboard-header">
            {console.log({myChits})}
            <div className="title">
                Dashboard
            </div>
            <div className="subTitle">
                Find some info here
            </div>
            <div className="gradientCard">
                <div className="">
                    <div>
                        To Pay
                    </div>
                    <div className="money">
                        ₹5450
                    </div>
                    <div className="time">
                        21st June, 2021 12:00 AM
                    </div>
                    <div className="payNow-button-container">
                        <button>
                            Pay Now
                        </button>
                    </div>
                </div>
                <div className="image-container">
                    <img src={rocketLogo} alt="a rocket firing up" width="50" />
                </div>

            </div>
            {myChits.length > 0 && myChits.map((c, i) => <Card key={c.id} data={c} />)}
        </div>
    )
}

export default Dashboard

