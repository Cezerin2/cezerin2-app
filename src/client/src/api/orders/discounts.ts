import ApiClient from "../../apiClient"

export const OrderDiscounts = (client: ReturnType<typeof ApiClient>) => ({
  create: (orderId, data) => client.post(`/orders/${orderId}/discounts`, data),
  update: (orderId, discountId, data) =>
    client.put(`/orders/${orderId}/discounts/${discountId}`, data),
  delete: (orderId, discountId) =>
    client.delete(`/orders/${orderId}/discounts/${discountId}`),
})

export default OrderDiscounts
