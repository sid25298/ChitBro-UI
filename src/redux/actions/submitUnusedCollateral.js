const submitUnusedCollateral = () => {
    return async (dispatch, getState) => {
        const { contracts: { contract, account } } = getState();
        try {
            if (contract) {
                await contract.methods.submitUnusedCollateral(account).send({ from: account });
            }
        }
        catch (err) {
            throw err;
        }
    }
}

export default submitUnusedCollateral
