import React from 'react'
import { useDispatch } from 'react-redux'
import joinChit from '../../../../redux/actions/joinChit'
import { MdTimelapse } from 'react-icons/md'
import { BiMoney } from 'react-icons/bi'
import { IoIosPeople } from 'react-icons/io'
import { FaCalendarDay } from 'react-icons/fa'
import './Card.scss'

const Card = ({ data, account }) => {

    const dispatch = useDispatch();

    const handleOnJoin = async (chitId) => {
        try {
            await dispatch(joinChit(chitId))
        }
        catch (err) {
            console.log(err)
        }
    }

    return (
        <div className="card">
            <div>
                <span className="heading">{data.name}</span>
                {!(data.room_filled || data.participants.includes(account)) &&
                    <button className="join-btn" onClick={() => handleOnJoin(data.id)}>Join</button>
                }
            </div>
            <div>
                <div>
                    <span className="input-label">
                        <BiMoney /> Chit Amount
                    </span>
                    <span>₹{data.amount}</span>
                </div>
                <div>
                    <span className="input-label">
                        <MdTimelapse /> Duration
                    </span>
                    <span>{data.duration} months</span>
                </div>
                <div>
                    <span className="input-label">
                        <IoIosPeople /> Max People
                    </span>
                    <span>{data.people_count}/{data.max_users} Joined</span>
                </div>
                <div>
                    <span className="input-label">
                        <FaCalendarDay /> Installment
                    </span>
                    <span>₹{Math.ceil(data.amount / data.duration)} p.m.</span>
                </div>
            </div>

        </div>
    )
}

export default Card
