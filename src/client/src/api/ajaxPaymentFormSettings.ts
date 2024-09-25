import AjaxClient from "../ajaxClient"

const AjaxPaymentFormSettings = (client: ReturnType<typeof AjaxClient>) => ({
  retrieve: () => client.get("/payment_form_settings"),
})

export default AjaxPaymentFormSettings
