import WebStoreClient from "../webstoreClient"

const WebStoreServices = (client: ReturnType<typeof WebStoreClient>) => ({
  list: (serviceId: string) => client.get(`/services/${serviceId}/logs`),
})

export default WebStoreServices
