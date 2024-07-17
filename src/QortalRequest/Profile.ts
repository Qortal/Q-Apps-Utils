// returns {error: "Cannot find requested data"} if data isn't found
import { ProfileCoinType } from "./Utils/Types.ts";

export const getProfileData = async (property: string) => {
  return (await qortalRequest({
    action: "GET_PROFILE_DATA",
    property,
  })) as string | object;
};

export const setProfileData = async (
  property: string,
  data: object,
  encrypt = false
) => {
  if (encrypt) property += "-private";
  return (await qortalRequest({
    action: "SET_PROFILE_DATA",
    property,
    data: { customData: data },
  })) as string;
};

export const setDefaultProfileData = async (
  property: string,
  data: object,
  encrypt = false
) => {
  if (encrypt) property += "-private";
  return (await qortalRequest({
    action: "SET_PROFILE_DATA",
    property,
    data,
  })) as string;
};

export const getProfileWallet = async (coin: ProfileCoinType) => {
  return await getProfileData("wallets")[coin];
};

export const setProfileWallet = async (wallet: object) => {
  return await setProfileData("wallets", wallet);
};

export const summonProfileModal = async () => {
  return (await qortalRequest({
    action: "SET_PROFILE_DATA",
    property: "wallets",
    data: {},
  })) as string;
};
