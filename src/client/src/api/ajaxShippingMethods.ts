import AjaxClient from "../ajaxClient"

const AjaxShippingMethods = (client: ReturnType<typeof AjaxClient>) => ({
  list: () => client.get("/shipping_methods"),
})

export default AjaxShippingMethods
