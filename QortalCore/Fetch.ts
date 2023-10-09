const assembleURLParams = (params: object) => {
  let finalUrl = "";
  const urls: string[] = [];

  Object.entries(params).map(([key, value]) => {
    urls.push(`${key}=${value.toString()}`);
  });

  urls.map((url, index) => {
    if (index > 0) finalUrl += "&";
    finalUrl += url;
  });
  return finalUrl;
};
