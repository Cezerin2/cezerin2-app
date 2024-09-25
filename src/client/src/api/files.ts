import ApiClient from "../apiClient"

export const Files = (client: ReturnType<typeof ApiClient>) => {
  const resourceUrl = "/files"

  return {
    list: filter => client.get(resourceUrl, filter),
    upload: formData => client.postFormData(resourceUrl, formData),
    delete: fileName => client.delete(`${resourceUrl}/${fileName}`),
  }
}

export default Files
