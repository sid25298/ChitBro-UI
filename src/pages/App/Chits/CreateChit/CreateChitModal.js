import React from 'react';
import { Controller } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import DatePicker from 'react-datepicker'
import createChit from '../../../../redux/actions/createChit';
import "react-datepicker/dist/react-datepicker.css";

export const CreateChitModal = ({ form, closeModal }) => {

    const dispatch = useDispatch();

    const handleSave = async () => {
        const values = form.getValues();
        await dispatch(createChit(values))
        closeModal();
    }

    return (
        <div className="modal">
            <div>
                <div>
                    <label className="input-label">Chit Name</label>
                    <input
                        type="text"
                        className="text-input"
                        name="chitName"
                        {...form.register("chitName")}
                    />
                </div>

                <div>
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
                <div>
                    <label className="input-label">Room Capacity</label>
                    <input
                        type="number"
                        className="text-input"
                        name="roomCapacity"
                        {...form.register("roomCapacity")}
                    />
                </div>
                <div>
                    <label className="input-label">Time Period</label>
                    <input
                        type="number"
                        className="text-input"
                        name="timePeriod"
                        {...form.register("timePeriod")}
                    />
                </div>
                <div>
                    <label className="input-label">Pool Amount</label>
                    <input
                        type="number"
                        className="text-input"
                        name="poolAmount"
                        {...form.register("poolAmount")}
                    />
                </div>
                <div>
                    <label className="input-label">Chit Duration</label>
                    <input
                        type="number"
                        className="text-input"
                        name="chitDuration"
                        {...form.register("chitDuration")}
                    />
                </div>
            </div>
            <div>
                <button onClick={handleSave}>Save</button>
                <button onClick={closeModal}>Cancel</button>
            </div>
        </div>
    )
}
