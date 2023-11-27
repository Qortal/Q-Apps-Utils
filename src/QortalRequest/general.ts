import { DaySummaryResponse } from "./Utils/Interfaces/Responses.ts";
import { BlockchainType } from "./Utils/Types.ts";
import { truncateNumber } from "../TypescriptUtils/Numbers/StringNumbers.ts";

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

export const getPrice = async (
  blockchainName: BlockchainType,
  tradesToInclude = 10,
  isQortRatio = true
) => {
  const response = (await qortalRequest({
    action: "GET_PRICE",
    blockchain: blockchainName,
    maxTrades: tradesToInclude,
    inverse: isQortRatio,
  })) as number;
  return response / 1e8;
};
