import transformers from '../../utils/transformers';

const createChit = (payload) => {
    return async (dispatch, getState) => {
        const { contracts: { contract, account } } = getState();
        try {
            if (contract) {
                const formattedRequest = transformers.transformCreateChitRequest(account, payload);
                await contract.methods.createChit(...formattedRequest).send({ from: account });
            }
        }
        catch (err) {
            throw err;
        }
    }
}

export default createChit
