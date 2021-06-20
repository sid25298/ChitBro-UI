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

const transformGetMyChitsResponse = (payload) => {
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

const transformCreateChitRequest = (account, payload) => {
    const now = new Date()
    const timePeriod = Math.abs(now - payload.nextPaymentDate) / 1000
    return [account,
        payload.chitName,
        Date.parse(now),
        Date.parse(payload.nextPaymentDate),
        parseInt(payload.roomCapacity),
        parseInt(timePeriod),
        parseInt(payload.poolAmount),
        parseInt(payload.chitDuration)
    ];
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    transformGetAllChitsResponse,
    transformGetMyChitsResponse,
    transformCreateChitRequest
}
