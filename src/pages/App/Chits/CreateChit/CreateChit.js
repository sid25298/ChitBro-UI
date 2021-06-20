import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import Modal from 'react-modal';
import { MODAL_STYLES } from '../../../../config/ui';
import debounce from '../../../.../../../utils/debounce';
import { CreateChitModal } from './CreateChitModal';
import './CreateChit.scss'
import { useEffect } from 'react';

const CreateChit = ({ setSearchText }) => {

    const form = useForm({});
    const search = form.watch("search");

    const [modalIsOpen, setIsOpen] = useState(false);

    const openModal = () => {
        setIsOpen(true);
    }

    const closeModal = () => {
        setIsOpen(false);
    }

    useEffect(() => {
        handleOnChange()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [search])

    const handleOnChange = debounce(() => {
        console.log("Hello", search)
        setSearchText(search);
    }, 500)

    return (
        <div className="create-chit">
            <div className="create-chit-container">
                <input
                    type="text"
                    placeholder="Search Chit Name"
                    name="search"
                    {...form.register("search")}
                />
                <div className="create-chit-btn">
                    <button onClick={() => openModal()}>Create Chit</button>
                </div>
            </div>

            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={MODAL_STYLES}
                contentLabel="Example Modal"
            >
                <CreateChitModal form={form} closeModal={closeModal} />
            </Modal>
        </div>
    )
}

export default CreateChit
