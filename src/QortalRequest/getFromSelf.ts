import { getBalance } from "./getFromAddress";
import { CoinType } from "./Utils/Types";

export const getWalletBalance = async (coin: CoinType) => {
  return (await qortalRequest({
    action: "GET_WALLET_BALANCE",
    coin,
  })) as number;
};

export const getUserBalance = async () => {
  const accountInfo = await getUserAccount();
  return (await getBalance(accountInfo.address)) as number;
};

export type AccountInfo = { address: string; publicKey: string };

export const getUserAccount = async () => {
  return (await qortalRequest({
    action: "GET_USER_ACCOUNT",
  })) as AccountInfo;
};
