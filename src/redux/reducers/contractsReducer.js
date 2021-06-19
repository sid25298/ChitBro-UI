import { CONTRACTS_SUCCESS } from '../types';

const initialState = {
    contract: null,
    account: null
}

const contractsReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case CONTRACTS_SUCCESS:
            return payload
        default:
            return state
    }
}

export default contractsReducer;