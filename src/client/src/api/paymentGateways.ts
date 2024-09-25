import ApiClient from "../apiClient"

export const PaymentGateways = (client: ReturnType<typeof ApiClient>) => {
  const resourceUrl = "/payment_gateways"

  return {
    retrieve: gatewayName => client.get(`${resourceUrl}/${gatewayName}`),
    update: (gatewayName, data) =>
      client.put(`${resourceUrl}/${gatewayName}`, data),
  }
}

export default PaymentGateways
