import ApiClient from "../apiClient"

export const CheckoutFields = (client: ReturnType<typeof ApiClient>) => {
  const resourceUrl = "/settings/checkout/fields"

  return {
    list: () => client.get(resourceUrl),
    retrieve: name => client.get(`${resourceUrl}/${name}`),
    update: (name, data) => client.put(`${resourceUrl}/${name}`, data),
  }
}

export default CheckoutFields
