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

export interface MetaData {
  title: string;
  description: string;
  tags: string[];
  mimeType: string;
}
export interface SearchResourcesResponse {
  name: string;
  service: string;
  identifier: string;
  metadata?: MetaData;
  size: number;
  created: number;
  updated: number;
}

export interface SendCoinResponse {
  amount: number;
  approvalStatus: string;
  fee: string;
  recipient: string;
  reference: string;
  senderPublicKey: string;
  signature: string;
  timestamp: number;
  txGroupId: number;
  type: string;
}
