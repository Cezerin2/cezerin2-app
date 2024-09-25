import AjaxClient from "../ajaxClient"

const AjaxRegister = (client: ReturnType<typeof AjaxClient>) => ({
  retrieve: data => client.post(`/register`, data),
})

export default AjaxRegister
