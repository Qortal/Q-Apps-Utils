import { CoinType } from "./Utils/Types";
import { SendCoinResponse } from "./Utils/Interfaces/Responses.ts";

export const sendCoin = async (
  address: string,
  amount: number,
  coin: CoinType
) => {
  try {
    return (await qortalRequest({
      action: "SEND_COIN",
      coin,
      destinationAddress: address,
      amount,
    })) as SendCoinResponse;
  } catch (e) {
    console.log("sendCoin refused", e);
  }
};

export const sendQORT = async (address: string, amount: number) => {
  return await sendCoin(address, amount, "QORT");
};

export interface NameData {
  name: string;
  reducedName: string;
  owner: string;
  data: string;
  registered: number;
  isForSale: boolean;
}
export const getNameData = async (name: string) => {
  return qortalRequest({
    action: "GET_NAME_DATA",
    name: name,
  }) as Promise<NameData>;
};

export const sendQORTtoName = async (name: string, amount: number) => {
  const address = await getNameData(name);
  if (address) return await sendQORT(address.owner, amount);
  else throw Error("Name Not Found");
};

export const sendBitCoin = async (address: string, amount: number) => {
  return await sendCoin(address, amount, "BTC");
};

export const sendLiteCoin = async (address: string, amount: number) => {
  return await sendCoin(address, amount, "LTC");
};

export const sendDogeCoin = async (address: string, amount: number) => {
  return await sendCoin(address, amount, "DOGE");
};

export const sendDigiByte = async (address: string, amount: number) => {
  return await sendCoin(address, amount, "DGB");
};

export const sendRavenCoin = async (address: string, amount: number) => {
  return await sendCoin(address, amount, "RVN");
};

export const sendPirateChain = async (address: string, amount: number) => {
  return await sendCoin(address, amount, "ARRR");
};
