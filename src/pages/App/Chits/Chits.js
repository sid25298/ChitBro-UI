import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Card from './Card/Card';
import getAllChits from '../../../redux/actions/getAllChits';
import './Chits.scss'

const Chits = () => {

    const dispatch = useDispatch();
    const chits = useSelector(state => state.chits.data);
    const account = useSelector(state => state.contracts.account);

    useEffect(() => {
        const handleGetAllChits = async () => {
            await dispatch(getAllChits());
        }
        handleGetAllChits();
    }, [dispatch])

    return (
        <div className="page-wrap">
            {chits.length > 0 && chits[0].name!=="" && chits.map((c, i) => <Card key={c.id} data={c} account={account} />)}
        </div>
    )
}

export default Chits
