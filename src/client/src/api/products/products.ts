import AjaxClient from "../../ajaxClient"
import ApiClient from "../../apiClient"
import ProductImages from "./images"
import ProductOptions from "./options"
import ProductVariants from "./variants"

const Products = (client: ReturnType<typeof ApiClient | typeof AjaxClient>) => {
  const resourceUrl = "/products"

  return {
    options: ProductOptions(client),
    variants: ProductVariants(client),
    images: ProductImages(client),
    list: filter => client.get(resourceUrl, filter),
    retrieve: (id, filter?) => client.get(`${resourceUrl}/${id}`, filter),
    create: data => client.post(resourceUrl, data),
    update: (id, data) => client.put(`${resourceUrl}/${id}`, data),
    delete: id => client.delete(`${resourceUrl}/${id}`),
    skuExists: (productId, sku) =>
      client.get(`${resourceUrl}/${productId}/sku`, { sku }),
    slugExists: (productId, slug) =>
      client.get(`${resourceUrl}/${productId}/slug`, { slug }),
  }
}

export default Products
