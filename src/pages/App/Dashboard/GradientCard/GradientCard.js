import React, {useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';
import rocketLogo from "../../../../assets/rocketLogo.png";
import contribute from '../../../../redux/actions/contribute'

const GradientCard = ({data: receivedData}) => {
    const [data, setData] = useState(null)
    const dispatch = useDispatch();

    useEffect(() => {
        setData(receivedData)
    }, [receivedData])

    return (
        <div className="gradientCard">
            <div className="">
                <div>
                    To Pay, for {data?.name}
                </div>
                <div className="money">
                    ₹{data?.installment && data.installment}
                </div>
                <div>

                </div>
                <div className="time">
                    Deadline: {data?.next_payment_date}
                </div>
                <div className="payNow-button-container">
                    {/* TODO: Contribute goes here*/}
                    <button style={{cursor: 'pointer'}} onClick={() => {dispatch(contribute(+data.id))}}>
                        Pay Now
                    </button>
                </div>
            </div>
            <div className="image-container">
                <img src={rocketLogo} alt="a rocket firing up" width="50" />
            </div>

        </div>
    );
}

export default GradientCard
