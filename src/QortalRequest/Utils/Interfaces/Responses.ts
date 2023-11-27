export interface SearchTransactionResponse {
  type: string;
  timestamp: number;
  reference: string;
  fee: string;
  signature: string;
  txGroupId: number;
  blockHeight: number;
  approvalStatus: string;
  creatorAddress: string;
  senderPublicKey: string;
  recipient: string;
  amount: string;
}

export interface SummaryTransactionCounts {
  arbitrary: number;
  AT: number;
  deployAt: number;
  groupInvite: number;
  joinGroup: number;
  message: number;
  payment: number;
  registerName: number;
  rewardShare: number;
  updateName: number;
  voteOnPoll: number;
}
export interface DaySummaryResponse {
  assetsIssued: number;
  blockCount: number;
  namesRegistered: number;
  totalTransactionCount: number;
  transactionCountByType: SummaryTransactionCounts;
}
