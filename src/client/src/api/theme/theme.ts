import ApiClient from "../../apiClient"
import ThemeAssets from "./assets"
import ThemePlaceholders from "./placeholders"
import ThemeSettings from "./settings"

export const Theme = (client: ReturnType<typeof ApiClient>) => ({
  settings: ThemeSettings(client),
  assets: ThemeAssets(client),
  placeholders: ThemePlaceholders(client),
  export: () => client.get("/theme/export"),
  install: formData => client.postFormData("/theme/install", formData),
})

export default Theme
