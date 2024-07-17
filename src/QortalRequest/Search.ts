import { SearchResourcesResponse } from "./Utils/Interfaces/Responses.ts";

export const fetchResourcesByIdentifier = async <T>(
  service: string,
  identifier: string
) => {
  const names: SearchResourcesResponse[] = await qortalRequest({
    action: "SEARCH_QDN_RESOURCES",
    service,
    identifier,
    includeMetadata: false,
  });
  const distinctNames = names.filter(
    (searchResponse, index) => names.indexOf(searchResponse) === index
  );

  const promises: Promise<T>[] = [];
  distinctNames.map(response => {
    const resource: Promise<T> = qortalRequest({
      action: "FETCH_QDN_RESOURCE",
      name: response.name,
      service,
      identifier,
    });
    promises.push(resource);
  });
  return (await Promise.all(promises)) as T[];
};
