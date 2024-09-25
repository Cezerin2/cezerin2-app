import WebStoreClient from "../webstoreClient"

const WebStoreServices = (client: ReturnType<typeof WebStoreClient>) => ({
  call: (serviceId: string, actionId: string) =>
    client.post(`/services/${serviceId}/actions/${actionId}`),
})

export default WebStoreServices
