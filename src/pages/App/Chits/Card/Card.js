import React from 'react'
import './Card.scss'
import {MdTimelapse} from 'react-icons/md'
import {BiMoney} from 'react-icons/bi'
import {IoIosPeople} from 'react-icons/io'
import {FaCalendarDay} from 'react-icons/fa'

const Card = ({ data }) => {
    return (
        <div className="card">
            <div>
                <span className="heading">{data.name}</span>
                <button className="join-btn">Join</button></div>
            <div>
                <div>
                    <span className="input-label">
                        <BiMoney/> Chit Amount
                    </span>
                    <span>₹{data.amount}</span>
                </div>
                <div>
                    <span className="input-label">
                        <MdTimelapse/> Duration
                    </span>
                    <span>{data.duration} months</span>
                </div>
                <div>
                    <span className="input-label">
                        <IoIosPeople/> Max People
                    </span>
                    <span>{data.people_count}/{data.max_users} Joined</span>
                </div>
                <div>
                    <span className="input-label">
                        <FaCalendarDay/> Installment
                    </span>
                    <span>₹{Math.ceil(data.amount / data.duration)} p.m.</span>
                </div>
            </div>

        </div>
    )
}

export default Card
