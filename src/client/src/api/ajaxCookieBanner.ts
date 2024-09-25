import AjaxClient from "../ajaxClient"

const AjaxCookieBanner = (client: ReturnType<typeof AjaxClient>) => ({
  retrieve: data => client.post(`/`, data),
})

export default AjaxCookieBanner
