const contribute = (chitId) => {
    return async (dispatch, getState) => {
        const { contracts: { contract, account } } = getState();
        try {
            if (contract) {

                console.log({account, chitId, chitIdType: typeof chitId})
                await contract.methods.contribute(account, chitId).send({ from: account });
            }
        }
        catch (err) {
            console.log({err})
        }
    }
}

export default contribute
