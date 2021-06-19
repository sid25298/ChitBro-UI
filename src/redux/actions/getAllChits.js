import apiList from '../../api/apiList';
import {
    GET_CHITS_REQUEST,
    GET_CHITS_SUCCESS
} from '../types'

const getAllChits = () => {
    return async (dispatch) => {
        try {
            dispatch({ type: GET_CHITS_REQUEST });
            const payload = await apiList.getAllChits();
            dispatch({ type: GET_CHITS_SUCCESS, payload })
        }
        catch (err) {
            throw err;
        }
    }
}

export default getAllChits
