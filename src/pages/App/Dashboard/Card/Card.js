import React from 'react'
import './Card.scss'

const Card = ({ data }) => {
    return (
        <div className="dashboard-card">
            <div>
                <span className="heading">{data.name}</span>
            </div>
            <div>
                <div className="amount">
                    <span className="input-label">Chit Amount</span>
                    <span>{data.amount}</span>
                </div>
                <div className="duration">
                    <span className="input-label">Duration</span>
                    <span>{data.duration}</span>
                </div>
                <div className="pool">
                    <span className="input-label">Pool</span>
                    <span>₹{data.pool}</span>
                </div>
                <div className="amount_paid">
                    <span className="input-label">Amount Paid</span>
                    <span>₹{data.amount_paid}</span>
                </div>
                <div>{data.people_count}/{data.max_users} Joined</div>
                <div>₹{Math.ceil(data.amount / data.duration)} p.m.</div>
            </div>

        </div>
    )
}

export default Card
