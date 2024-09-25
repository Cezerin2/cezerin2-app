import ApiClient from "../../apiClient"

export const OrderItems = (client: ReturnType<typeof ApiClient>) => ({
  create: (orderId: string, data) =>
    client.post(`/orders/${orderId}/items`, data),
  update: (orderId: string, itemId: string, data) =>
    client.put(`/orders/${orderId}/items/${itemId}`, data),
  delete: (orderId: string, itemId: string) =>
    client.delete(`/orders/${orderId}/items/${itemId}`),
})

export default OrderItems
