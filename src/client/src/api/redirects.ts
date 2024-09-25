import ApiClient from "../apiClient"

export const Redirects = (client: ReturnType<typeof ApiClient>) => {
  const resourceUrl = "/redirects"

  return {
    list: () => client.get(resourceUrl),
    retrieve: id => client.get(`${resourceUrl}/${id}`),
    create: data => client.post(resourceUrl, data),
    update: (id, data) => client.put(`${resourceUrl}/${id}`, data),
    delete: id => client.delete(`${resourceUrl}/${id}`),
  }
}

export default Redirects
