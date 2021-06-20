import {
    GET_COLLATERAL_REQUEST,
    GET_COLLATERAL_SUCCESS
} from '../types'

const initialState = {
    isFetching: false,
    used_collateral: null,
    unused_collateral: null,
}

const collateralReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_COLLATERAL_REQUEST:
            return { isFetching: true, ...state }
        case GET_COLLATERAL_SUCCESS:
            return { ...payload, isFetching: false }
        default:
            return state
    }
}

export default collateralReducer;
