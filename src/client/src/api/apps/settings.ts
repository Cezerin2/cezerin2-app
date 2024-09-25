import ApiClient from "../../apiClient"

export const AppSettings = (client: ReturnType<typeof ApiClient>) => {
  const resourceUrl = "/apps"

  return {
    retrieve: appKey => client.get(`${resourceUrl}/${appKey}/settings`),
    update: (appKey, data) =>
      client.put(`${resourceUrl}/${appKey}/settings`, data),
  }
}

export default AppSettings
