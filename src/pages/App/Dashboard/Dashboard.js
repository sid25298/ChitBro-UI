import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Slider from "react-slick";
import LineLoader from '../../../components/LineLoader/LineLoader';
import getMyChits from '../../../redux/actions/getMyChits';
import GradientCard from './GradientCard/GradientCard';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Dashboard.scss"
import "../Chits/CreateChit/CreateChit.scss";

import submitUnusedCollateral from '../../../redux/actions/submitUnusedCollateral';

const Dashboard = () => {

    const dispatch = useDispatch();
    const { data: myChits, isFetching } = useSelector(state => state.myChits);
    const account = useSelector(state => state.contracts.account);
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    useEffect(() => {
        const handleGetMyChits = async () => {
            await dispatch(getMyChits());
        }
        if (account) {
            handleGetMyChits();
        }
    }, [dispatch, account])

    function renderPendingPayments() {
        if (myChits.length === 0) {
            return <div>Nothing found</div>
        }
        return (
            <Slider {...settings}>
                {myChits.map((c, i) => <GradientCard key={c.id} data={c} />)}
            </Slider>
        );
    }

    return (
        <div className="page-wrap dashboard-header">
            {console.log({ myChits })}
            <div className="title">
                Dashboard
            </div>
            <div className="subTitle">
                Find some info here
            </div>
            {renderPendingPayments()}
            {isFetching &&
                <LineLoader />
            }
            
            <div className="create-chit-btn">
            <button onClick={() => {
                dispatch(submitUnusedCollateral())
            }}>Submit Collateral</button></div>
        </div>
    )
}

export default Dashboard

