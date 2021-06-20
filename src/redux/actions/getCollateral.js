import transformers from '../../utils/transformers';
import {
    GET_COLLATERAL_REQUEST,
    GET_COLLATERAL_SUCCESS
} from '../types'

const getCollateral = () => {
    return async (dispatch, getState) => {
        const { contracts: { contract, account } } = getState();
        try {
            if (contract) {
                dispatch({ type: GET_COLLATERAL_REQUEST });
                const payload = await contract.methods.getCollateral(account).call();
                const formattedResponse = transformers.transformGetCollateralResponse(payload);
                dispatch({ type: GET_COLLATERAL_SUCCESS, payload: formattedResponse })
            }
        }
        catch (err) {
            throw err;
        }
    }
}

export default getCollateral;
