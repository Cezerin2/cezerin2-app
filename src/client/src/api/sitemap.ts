import AjaxClient from "../ajaxClient"
import ApiClient from "../apiClient"

export const Sitemap = (
  client: ReturnType<typeof ApiClient | typeof AjaxClient>
) => {
  const resourceUrl = "/sitemap"

  return {
    list: filter => client.get(resourceUrl, filter),
    retrieve: filter => client.get(resourceUrl, filter),
  }
}

export default Sitemap
