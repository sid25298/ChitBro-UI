import React, { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Card from './Card/Card';
import CreateChit from './CreateChit/CreateChit'
import getAllChits from '../../../redux/actions/getAllChits';
import { FaRegSadTear } from 'react-icons/fa'
import './Chits.scss'

const Chits = () => {

    const dispatch = useDispatch();
    const chits = useSelector(state => state.chits.data);
    const account = useSelector(state => state.contracts.account);
    const [searchText, setSearchText] = useState("");


    useEffect(() => {
        const handleGetAllChits = async () => {
            await dispatch(getAllChits());
        }
        handleGetAllChits();
    }, [dispatch])

    function renderChits() {
        let filteredChits = chits.filter(chit => chit.name !== "" && chit.name.includes(searchText));
        if (filteredChits.length === 0) {
            return (
                <div className="no-chits-message">
                    <FaRegSadTear />
                    <span>No Chits available. Try creating one?</span>
                </div>
            );
        }
        return filteredChits.map((c, i) => <Card key={c.id} data={c} account={account} />);
    }

    return (
        <div className="page-wrap">
            <CreateChit setSearchText={setSearchText} />
            {renderChits()}
        </div>
    )
}

export default Chits
