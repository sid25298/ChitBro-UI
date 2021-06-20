import transformers from '../../utils/transformers';
import {
    GET_MY_CHITS_REQUEST,
    GET_MY_CHITS_SUCCESS
} from '../types'

const getMyChits = () => {
    return async (dispatch, getState) => {
        const { contracts: { contract, account } } = getState();
        try {
            if (contract) {
                dispatch({ type: GET_MY_CHITS_REQUEST });
                const payload = await contract.methods.getMyChits(account).call();
                const formattedResponse = transformers.transformGetMyChitsResponse(payload);
                dispatch({ type: GET_MY_CHITS_SUCCESS, payload: formattedResponse })
            }
        }
        catch (err) {
            throw err;
        }
    }
}

export default getMyChits
