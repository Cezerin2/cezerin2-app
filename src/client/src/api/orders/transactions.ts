import ApiClient from "../../apiClient"

export const OrderTransactions = (client: ReturnType<typeof ApiClient>) => ({
  create: (orderId: string, data) =>
    client.post(`/orders/${orderId}/transactions`, data),
  update: (orderId: string, transactionId: string, data) =>
    client.put(`/orders/${orderId}/transactions/${transactionId}`, data),
  delete: (orderId: string, transactionId: string) =>
    client.delete(`/orders/${orderId}/transactions/${transactionId}`),
})

export default OrderTransactions
