import ApiClient from "../apiClient"

export const Text = (client: ReturnType<typeof ApiClient>) => ({
  list: () => client.get("/text"),
})

export default Text
