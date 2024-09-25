import ApiClient from "../../apiClient"

export const ThemeSettings = (client: ReturnType<typeof ApiClient>) => ({
  retrieve: () => client.get("/theme/settings"),
  update: data => client.put("/theme/settings", data),
  retrieveSchema: () => client.get("/theme/settings_schema"),
})

export default ThemeSettings
