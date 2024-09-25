import ProductOptionValues from "./optionValues"

import AjaxClient from "../../ajaxClient"
import ApiClient from "../../apiClient"

const ProductOptions = (
  client: ReturnType<typeof ApiClient | typeof AjaxClient>
) => ({
  values: ProductOptionValues(client),
  list: productId => client.get(`/products/${productId}/options`),
  retrieve: (productId, optionId) =>
    client.get(`/products/${productId}/options/${optionId}`),
  create: (productId, data) =>
    client.post(`/products/${productId}/options`, data),
  update: (productId, optionId, data) =>
    client.put(`/products/${productId}/options/${optionId}`, data),
  delete: (productId, optionId) =>
    client.delete(`/products/${productId}/options/${optionId}`),
})

export default ProductOptions
