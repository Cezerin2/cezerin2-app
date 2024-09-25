import WebStoreClient from "../webstoreClient"
import WebStoreServiceActions from "./serviceActions"
import WebStoreServiceLogs from "./serviceLogs"
import WebStoreServiceSettings from "./serviceSettings"

const WebStoreServices = (client: ReturnType<typeof WebStoreClient>) => {
  const resourceUrl = "/services"

  return {
    settings: WebStoreServiceSettings(client),
    actions: WebStoreServiceActions(client),
    logs: WebStoreServiceLogs(client),
    list: filter => client.get(resourceUrl, filter),
    retrieve: (id: string) => client.get(`${resourceUrl}/${id}`),
    enable: (id: string) => client.post(`${resourceUrl}/${id}/enable`),
    disable: (id: string) => client.post(`${resourceUrl}/${id}/disable`),
  }
}

export default WebStoreServices
