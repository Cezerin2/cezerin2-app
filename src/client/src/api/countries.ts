import AjaxClient from "../ajaxClient"
import ApiClient from "../apiClient"

export const Countries = (
  client: ReturnType<typeof ApiClient | typeof AjaxClient>
) => ({
  list: () => client.get("/countries"),
})

export default Countries
