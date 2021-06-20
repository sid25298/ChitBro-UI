import React from 'react';
import { Controller } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import DatePicker from 'react-datepicker'
import createChit from '../../../../redux/actions/createChit';
import "react-datepicker/dist/react-datepicker.css";
import "./CreateChitModal.scss"
import '../CreateChit/CreateChit.scss'

export const CreateChitModal = ({ form, closeModal }) => {

    const dispatch = useDispatch();

    const handleSave = async () => {
        const values = form.getValues();
        await dispatch(createChit(values))
        closeModal();
    }

    return (
        <div className="modal">
            <div className="modal-inputs-container">
                <div className="modal-single-input-container">
                    <label className="input-label create-chit-label">Chit Name</label>
                    <input
                        type="text"
                        className="text-input"
                        name="chitName"
                        {...form.register("chitName")}
                    />
                </div>

                <div className="modal-single-input-container">
                    <label className="input-label">Next Payment Date</label>
                    <Controller
                        control={form.control}
                        name='nextPaymentDate'
                        render={({ field }) => (
                            <DatePicker
                                placeholderText='Select date'
                                onChange={(date) => field.onChange(date)}
                                selected={field.value}
                            />
                        )}
                    />
                </div>
                <div className="modal-single-input-container">
                    <label className="input-label">Room Capacity</label>
                    <input
                        type="number"
                        className="text-input"
                        name="roomCapacity"
                        {...form.register("roomCapacity")}
                    />
                </div>
                <div className="modal-single-input-container">
                    <label className="input-label">Time Period</label>
                    <input
                        type="number"
                        className="text-input"
                        name="timePeriod"
                        {...form.register("timePeriod")}
                    />
                </div>
                <div className="modal-single-input-container">
                    <label className="input-label">Pool Amount</label>
                    <input
                        type="number"
                        className="text-input"
                        name="poolAmount"
                        {...form.register("poolAmount")}
                    />
                </div>
                <div className="modal-single-input-container">
                    <label className="input-label">Chit Duration</label>
                    <input
                        type="number"
                        className="text-input"
                        name="chitDuration"
                        {...form.register("chitDuration")}
                    />
                </div>
            </div>
            <div className="modal-buttons-container create-chit-btn space-buttons">
                <button className="" onClick={handleSave}>Save</button>
                <button className="btn-cancel" onClick={closeModal}>Cancel</button>
            </div>
        </div>
    )
}
