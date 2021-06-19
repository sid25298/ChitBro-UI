import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import getMyChits from '../../../redux/actions/getMyChits';
import Card from './Card/Card';

const Dashboard = () => {

    const dispatch = useDispatch();
    const myChits = useSelector(state => state.myChits.data);

    useEffect(() => {
        const handleGetMyChits = async () => {
            await dispatch(getMyChits());
        }
        handleGetMyChits();
    }, [dispatch])

    return (
        <div className="page-wrap">
            {myChits.length > 0 && myChits.map((c, i) => <Card key={c.id} data={c} />)}
        </div>
    )
}

export default Dashboard

