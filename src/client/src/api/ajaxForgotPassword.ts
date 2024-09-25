import AjaxClient from "../ajaxClient"

const AjaxForgotPassword = (client: ReturnType<typeof AjaxClient>) => ({
  retrieve: data => client.post(`/forgot-password`, data),
  update: data => client.put(`/forgot-password`, data),
})

export default AjaxForgotPassword
