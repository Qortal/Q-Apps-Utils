import { DaySummaryResponse } from "./Utils/Interfaces/Responses.ts";
import { Blockchains, BlockchainType } from "./Utils/Types.ts";
import { truncateNumber } from "../Utils/Numbers/StringNumbers.ts";
import { getNameData } from "./SendCoin.ts";
import { getUserAccountNames } from "./getFromSelf.ts";

export const getDaySummary = async () => {
  return (await qortalRequest({
    action: "GET_DAY_SUMMARY",
  })) as DaySummaryResponse;
};

export const getBlocksInDuration = async (minutes: number) => {
  return getDaySummary().then(response => {
    const minutesPerDay = 60 * 24;
    const blocksPerMinute = response.blockCount / minutesPerDay;
    const blocksInDuration = minutes * blocksPerMinute;
    return +truncateNumber(Math.abs(blocksInDuration), 0);
  });
};

export type DayTime = { days: number; hours: number; minutes: number };
export const getDurationFromBlocks = async (blocks: number) => {
  return getDaySummary().then(response => {
    const minutesPerDay = 60 * 24;
    const blocksPerMinute = response.blockCount / minutesPerDay;
    const duration = blocks / blocksPerMinute;

    const days = Math.floor(duration / minutesPerDay);
    const hours = Math.floor((duration % minutesPerDay) / 60);
    const minutes = Math.floor(duration % 60);

    return { days, hours, minutes } as DayTime;
  });
};

export const getPriceAsNumber = async (
  blockchainName: BlockchainType,
  tradesToInclude = 10
) => {
  const response = (await qortalRequest({
    action: "GET_PRICE",
    blockchain: blockchainName,
    maxTrades: tradesToInclude,
    inverse: true,
  })) as number;
  return response / 1e8;
};

type BlockchainPrice = { name: BlockchainType; price: number };

const getPriceAsObject = async (
  chain: BlockchainType,
  tradesToInclude: number
) => {
  return { name: chain, price: await getPriceAsNumber(chain, tradesToInclude) };
};

export const getPricesAsObject = async (
  chains: BlockchainType[],
  tradesToInclude = 10
) => {
  return await Promise.all(
    chains.map(async (chain: BlockchainType) => {
      return getPriceAsObject(chain, tradesToInclude);
    })
  );
};

export const sendQchatDM = async (
  recipientName: string,
  message: string,
  allowSelfAsRecipient = false
) => {
  if (!allowSelfAsRecipient) {
    const userAccountNames = await getUserAccountNames();
    const userNames = userAccountNames.map(name => name.name);
    if (userNames.includes(recipientName)) return;
  }

  const address = await getNameData(recipientName);
  try {
    return await qortalRequest({
      action: "SEND_CHAT_MESSAGE",
      destinationAddress: address.owner,
      message,
    });
  } catch (e) {
    console.log(e);
    return false;
  }
};
