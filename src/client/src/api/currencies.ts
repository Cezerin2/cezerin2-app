import AjaxClient from "../ajaxClient"
import ApiClient from "../apiClient"

export const Currencies = (
  client: ReturnType<typeof ApiClient | typeof AjaxClient>
) => ({
  list: () => client.get("/currencies"),
})

export default Currencies
