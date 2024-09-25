import AjaxClient from "../../ajaxClient"
import ApiClient from "../../apiClient"

export const ProductImages = (
  client: ReturnType<typeof ApiClient | typeof AjaxClient>
) => ({
  list: productId => client.get(`/products/${productId}/images`),
  update: (productId, imageId, data) =>
    client.put(`/products/${productId}/images/${imageId}`, data),
  upload: (productId, formData) =>
    client.postFormData(`/products/${productId}/images`, formData),
  delete: (productId, imageId) =>
    client.delete(`/products/${productId}/images/${imageId}`),
})

export default ProductImages
