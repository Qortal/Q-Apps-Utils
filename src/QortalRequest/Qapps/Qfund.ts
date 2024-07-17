export const hasQFundEnded = async (atAddress: string) => {
    try {
        const url = `/at/${atAddress}`;
        const response = await fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });
        if (response.status === 200) {
            const responseDataSearch = await response.json();
            if (
                Object.keys(responseDataSearch).length > 0 &&
                responseDataSearch?.isFinished
            ) {
                return true;
            } else {
                return false;
            }
        }
    } catch (error) {
        console.log(error);
    }
};

export const getATAmount = async crowdfundLink => {
    const crowdfund = await getCrowdfund(crowdfundLink);
    const atAddress = crowdfund?.deployedAT?.aTAddress;
    if (!atAddress) return 0;
    try {
        const res = await qortalRequest({
            action: "SEARCH_TRANSACTIONS",
            txType: ["PAYMENT"],
            confirmationStatus: "CONFIRMED",
            address: atAddress,
            limit: 0,
            reverse: true,
        });
        if (res?.length > 0) {
            const totalAmount: number = res.reduce(
                (total: number, transaction) => total + parseFloat(transaction.amount),
                0
            );
            return totalAmount;
        }
    } catch (e) {
        console.log(e);
        return 0;
    }
};

export const getCrowdfund = async (crowdfundLink: string) => {
    const splitLink = crowdfundLink.split("/");
    const name = splitLink[5];
    const identifier = splitLink[6];
    return await qortalRequest({
      action: "FETCH_QDN_RESOURCE",
      service: "DOCUMENT",
      name,
      identifier,
    });
};