import apiList from '../../api/apiList';
import {
    GET_MY_CHITS_REQUEST,
    GET_MY_CHITS_SUCCESS
} from '../types'

const getAllChits = () => {
    return async (dispatch) => {
        try {
            dispatch({ type: GET_MY_CHITS_REQUEST });
            const payload = await apiList.getMyChits();
            dispatch({ type: GET_MY_CHITS_SUCCESS, payload })
        }
        catch (err) {
            throw err;
        }
    }
}

export default getAllChits
