const contribute = (chitId) => {
    return async (dispatch, getState) => {
        const { contracts: { contract, account } } = getState();
        try {
            if (contract) {

                await contract.methods.contribute(account, chitId).send({ from: account });
            }
        }
        catch (err) {
            throw err;
        }
    }
}

export default contribute
