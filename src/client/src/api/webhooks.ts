import ApiClient from "../apiClient"

export const Webhooks = (client: ReturnType<typeof ApiClient>) => {
  const resourceUrl = "/webhooks"

  return {
    list: () => client.get(resourceUrl),
    retrieve: (id: string) => client.get(`${resourceUrl}/${id}`),
    create: data => client.post(`${resourceUrl}`, data),
    update: (id: string, data) => client.put(`${resourceUrl}/${id}`, data),
    delete: (id: string) => client.delete(`${resourceUrl}/${id}`),
  }
}

export default Webhooks
