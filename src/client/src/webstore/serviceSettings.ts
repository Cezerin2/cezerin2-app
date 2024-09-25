import WebStoreClient from "../webstoreClient"

const WebStoreServices = (client: ReturnType<typeof WebStoreClient>) => ({
  retrieve: (id: string) => client.get(`/services/${id}/settings`),
  update: (id: string, data) => client.post(`/services/${id}/settings`, data),
})

export default WebStoreServices
