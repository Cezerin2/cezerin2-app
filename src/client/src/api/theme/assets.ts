import ApiClient from "../../apiClient"

export const ThemeAssets = (client: ReturnType<typeof ApiClient>) => {
  const resourceUrl = "/theme/assets"

  return {
    uploadFile: formData => client.postFormData(resourceUrl, formData),
    deleteFile: fileName => client.delete(`${resourceUrl}/${fileName}`),
  }
}

export default ThemeAssets
