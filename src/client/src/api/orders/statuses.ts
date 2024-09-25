import ApiClient from "../../apiClient"

export const OrderStatuses = (client: ReturnType<typeof ApiClient>) => {
  const resourceUrl = "/order_statuses"

  return {
    list: filter => client.get(resourceUrl, filter),
    retrieve: (id, filter) => client.get(`${resourceUrl}/${id}`, filter),
    create: data => client.post(resourceUrl, data),
    update: (id, data) => client.put(`${resourceUrl}/${id}`, data),
    delete: id => client.delete(`${resourceUrl}/${id}`),
  }
}

export default OrderStatuses
