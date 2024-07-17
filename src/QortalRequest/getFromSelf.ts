import { getBalance } from "./getFromAddress";
import { CoinType } from "./Utils/Types";
import { GetRequestData } from "./Utils/Interfaces/Parameters.ts";

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

export const getForeignWallet = async (coin: CoinType) => {
  return (await qortalRequest({
    action: "GET_USER_WALLET",
    coin,
  })) as AccountInfo;
};

export const stringIsEmpty = (value: string) => {
  return value === "";
};

export type AccountName = { name: string; owner: string };
export const getAccountNames = async (
  address: string,
  params?: GetRequestData
) => {
  const names = (await qortalRequest({
    action: "GET_ACCOUNT_NAMES",
    address: address,
    ...params,
  })) as AccountName[];

  const namelessAddress = { name: "", owner: address };
  const emptyNamesFilled = names.map(({ name, owner }) => {
    return stringIsEmpty(name) ? namelessAddress : { name, owner };
  });

  const returnValue =
    emptyNamesFilled.length > 0 ? emptyNamesFilled : [namelessAddress];
  return returnValue as AccountName[];
};

export const getUserAccount = async () => {
  return (await qortalRequest({
    action: "GET_USER_ACCOUNT",
  })) as AccountInfo;
};

export const getUserAccountNames = async () => {
  const account = await getUserAccount();
  return await getAccountNames(account.address);
};

export const userHasName = async (name: string) => {
  const userAccountNames = await getUserAccountNames();
  const userNames = userAccountNames.map(userName => userName.name);
  return userNames.includes(name);
};
