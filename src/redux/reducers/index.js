import { combineReducers } from 'redux';
import { RESET_APP_STATE } from '../types';
import chitsReducer from './chitsReducer';
import contractsReducer from './contractsReducer';
import myChitsReducer from './myChitsReducer';

const appReducer = combineReducers({
    chits: chitsReducer,
    myChits: myChitsReducer,
    contracts: contractsReducer
})

// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
    if (action.type === RESET_APP_STATE) {
        state = {};
    }
    return appReducer(state, action);
}