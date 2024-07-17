export const getAvatarFromName = async (name: string) => {
  return await qortalRequest({
    action: "GET_QDN_RESOURCE_URL",
    name,
    service: "THUMBNAIL",
    identifier: "qortal_avatar",
  });
};
