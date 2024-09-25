import WebStoreClient from "../webstoreClient"

const WebStoreAccount = (client: ReturnType<typeof WebStoreClient>) => {
  const resourceUrl = "/account"

  return {
    retrieve: () => client.get(resourceUrl),
    update: data => client.put(resourceUrl, data),
    updateDeveloper: data => client.put(`${resourceUrl}/developer`, data),
  }
}

export default WebStoreAccount
