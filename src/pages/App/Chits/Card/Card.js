import React from 'react'
import './Card.scss'

const Card = ({ data }) => {
    return (
        <div className="card">
            <div>
                <span className="heading">{data.name}</span>
                <button className="join-btn">Join</button></div>
            <div>
                <div className="amount">
                    <span>Chit Amount</span>
                    <span>{data.amount}</span>
                </div>
                <div className="duration">
                    <span>Duration</span>
                    <span>{data.duration}</span>
                </div>
            </div>
            <div>
                <div>{data.people_count}/{data.max_users} Joined</div>
                <div>₹{Math.ceil(data.amount / data.duration)} p.m.</div>
            </div>

        </div>
    )
}

export default Card
