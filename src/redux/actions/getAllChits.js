import transformers from '../../utils/transformers';
import {
    GET_CHITS_REQUEST,
    GET_CHITS_SUCCESS
} from '../types'

const getAllChits = () => {
    return async (dispatch, getState) => {
        const { contracts: { contract } } = getState();
        try {
            if (contract) {
                dispatch({ type: GET_CHITS_REQUEST });
                const payload = await contract.methods.getAll().call();
                const formattedResponse = transformers.transformGetAllChitsResponse(payload);
                dispatch({ type: GET_CHITS_SUCCESS, payload: formattedResponse })
            }
        }
        catch (err) {
            throw err;
        }
    }
}

export default getAllChits
