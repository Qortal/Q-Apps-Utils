import { SearchTransactionResponse } from "./Utils/Interfaces/Responses.ts";
import { TransactionSearchParams } from "./Utils/Interfaces/Parameters.ts";

export const searchTransactions = async (params: TransactionSearchParams) => {
  return (await qortalRequest({
    action: "SEARCH_TRANSACTIONS",
    ...params,
  })) as SearchTransactionResponse[];
};
