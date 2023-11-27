import { stringIsEmpty } from "../TypescriptUtils/Numbers/StringNumbers";
import { GetRequestData } from "./Utils/Interfaces/Parameters.ts";
type AccountName = { name: string; owner: string };

export const getAccountNames = async (
  address: string,
  params?: GetRequestData
) => {
  const names = (await qortalRequest({
    action: "GET_ACCOUNT_NAMES",
    address,
    ...params,
  })) as AccountName[];

  const namelessAddress = { name: "", owner: address };
  const emptyNamesFilled = names.map(({ name, owner }) => {
    return stringIsEmpty(name) ? namelessAddress : { name, owner };
  });

  return emptyNamesFilled.length > 0 ? emptyNamesFilled : [namelessAddress];
};

export const getBalance = async (address: string) => {
  return (await qortalRequest({
    action: "GET_BALANCE",
    address,
  })) as number;
};
