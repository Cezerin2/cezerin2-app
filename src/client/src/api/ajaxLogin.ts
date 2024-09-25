import AjaxClient from "../ajaxClient"

const AjaxLogin = (client: ReturnType<typeof AjaxClient>) => ({
  retrieve: data => client.post(`/login`, data),
})

export default AjaxLogin
