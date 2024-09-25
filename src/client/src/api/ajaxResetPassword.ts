import AjaxClient from "../ajaxClient"

const AjaxResetPassword = (client: ReturnType<typeof AjaxClient>) => ({
  retrieve: data => client.post(`/reset-password`, data),
  update: data => client.put(`/reset-password`, data),
})

export default AjaxResetPassword
