const submitCollateralToChit = (amount) => {
    return async (dispatch, getState) => {
        const { contracts: { contract, account } } = getState();
        try {
            if (contract) {
                await contract.methods.submitCollateralToChit(account, amount).send({ from: account });
            }
        }
        catch (err) {
            throw err;
        }
    }
}

export default submitCollateralToChit
