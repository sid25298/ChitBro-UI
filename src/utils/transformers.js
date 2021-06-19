const transformGetAllChitsResponse = (payload) => {
    return payload.map(obj => ({
        id: obj.chitId,
        name: obj.chitName,
        amount: obj.poolAmount,
        duration: obj.chitDuration, //number of months
        people_count: obj.participants.length,
        max_users: obj.roomCapacity,
        chit_owner: obj.chitOwner,
        created_at: obj.createdAt,
        next_payment_date: obj.nextPaymentDate,
        participants: obj.participants,
        room_filled: obj.roomFilled,
        time_period: obj.timePeriod
    }))
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    transformGetAllChitsResponse
}