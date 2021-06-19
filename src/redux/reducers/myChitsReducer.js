import {
    GET_MY_CHITS_REQUEST,
    GET_MY_CHITS_SUCCESS
} from '../types'

const initialState = {
    isFetching: false,
    data: []
}

const myChitsReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_MY_CHITS_REQUEST:
            return { isFetching: true, data: [] }
        case GET_MY_CHITS_SUCCESS:
            return { data: payload, isFetching: false }
        default:
            return state
    }
}

export default myChitsReducer;
