import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux';
import getMyChits from '../../../redux/actions/getMyChits';
import GradientCard from './GradientCard/GradientCard';
import "./Dashboard.scss"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Dashboard = () => {

    const dispatch = useDispatch();
    const myChits = useSelector(state => state.myChits.data);
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
                {myChits.map((c, i) => <GradientCard key={c.id} data={c}/>)}
            </Slider>
        );
    }

    return (
        <div className="page-wrap dashboard-header">
            {console.log({myChits})}
            <div className="title">
                Dashboard
            </div>
            <div className="subTitle">
                Find some info here
            </div>
            {renderPendingPayments()}
        </div>
    )
}

export default Dashboard

