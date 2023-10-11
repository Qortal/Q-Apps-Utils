import {
  SearchTransactionResponse,
  TransactionSearchParams,
} from "../Interfaces";

export const searchTransactions = async (params: TransactionSearchParams) => {
  return (await qortalRequest({
    action: "SEARCH_TRANSACTIONS",
    ...params,
  })) as SearchTransactionResponse[];
};
