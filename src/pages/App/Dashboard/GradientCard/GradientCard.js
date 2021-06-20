import React, {useEffect, useState} from 'react';
import rocketLogo from "../../../../assets/rocketLogo.png";

const GradientCard = ({data: receivedData}) => {
    const [data, setData] = useState(null)

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
                    <button>
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
