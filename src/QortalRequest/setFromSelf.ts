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
