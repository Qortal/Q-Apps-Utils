export type ConfirmationStatus = "CONFIRMED" | "UNCONFIRMED" | "BOTH";
export type TransactionType =
  | "GENESIS"
  | "PAYMENT"
  | "REGISTER_NAME"
  | "UPDATE_NAME"
  | "SELL_NAME"
  | "CANCEL_SELL_NAME"
  | "BUY_NAME"
  | "CREATE_POLL"
  | "VOTE_ON_POLL"
  | "ARBITRARY"
  | "ISSUE_ASSET"
  | "TRANSFER_ASSET"
  | "CREATE_ASSET_ORDER"
  | "CANCEL_ASSET_ORDER"
  | "MULTI_PAYMENT"
  | "DEPLOY_AT"
  | "MESSAGE"
  | "CHAT"
  | "PUBLICIZE"
  | "AIRDROP"
  | "AT"
  | "CREATE_GROUP"
  | "UPDATE_GROUP"
  | "ADD_GROUP_ADMIN"
  | "REMOVE_GROUP_ADMIN"
  | "GROUP_BAN"
  | "CANCEL_GROUP_BAN"
  | "GROUP_KICK"
  | "GROUP_INVITE"
  | "CANCEL_GROUP_INVITE"
  | "JOIN_GROUP"
  | "LEAVE_GROUP"
  | "GROUP_APPROVAL"
  | "SET_GROUP"
  | "UPDATE_ASSET"
  | "ACCOUNT_FLAGS"
  | "ENABLE_FORGING"
  | "REWARD_SHARE"
  | "ACCOUNT_LEVEL"
  | "TRANSFER_PRIVS"
  | "PRESENCE";

export const Coins = ["QORT", "BTC", "LTC", "DOGE", "DGB", "RVN", "ARRR"];
export type CoinType = (typeof Coins)[number];

export const ProfileCoins = ["btc", "ltc", "doge", "dgb", "rvn", "arrr"];
export type ProfileCoinType = (typeof ProfileCoins)[number];
export const Blockchains = [
  "BITCOIN",
  "LITECOIN",
  "DOGECOIN",
  "DIGIBYTE",
  "RAVENCOIN",
  "PIRATECHAIN",
];

export type BlockchainType = (typeof Blockchains)[number];
