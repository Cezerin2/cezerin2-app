import AjaxClient from "../ajaxClient"

const AjaxPaymentMethods = (client: ReturnType<typeof AjaxClient>) => ({
  list: () => client.get("/payment_methods"),
})

export default AjaxPaymentMethods
