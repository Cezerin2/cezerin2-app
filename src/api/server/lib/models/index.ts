export * from "./appSettings"
export * from "./checkoutFields"
export * from "./customerGroups"
export * from "./customers"
export * from "./emailSettings"
export * from "./emailTemplates"
export * from "./files"
export * from "./orders"
export * from "./pages"
export * from "./paymentGateways"
export * from "./paymentMethods"
export * from "./productCategories"
export * from "./products"
export * from "./redirects"
export * from "./settings"
export * from "./shippingMethods"
export * from "./shopx"
export * from "./themeSettings"
export * from "./users"
export * from "./webhooks"

// If needed to combine one day
// import { appSetting,appSettingTypes,checkoutField,checkoutFieldTypes,customerGroup,customerGroupTypes,customer,customerTypes,emailSetting,emailSettingTypes,emailTemplate,emailTemplateTypes,file,fileTypes,order,orderTypes,page,pageTypes,paymentGateway,paymentGatewayTypes,paymentMethod,paymentMethodTypes,productCategory,productCategoryTypes,product,productTypes,redirect,redirectTypes,setting,settingTypes,shippingMethod,shippingMethodTypes,themeSetting,themeSettingTypes,user,userTypes,webhook,webhookTypes } from "@server/schema";
// import { Connection, Document } from "mongoose"

// export const appSettings = (connection: Connection) =>
//   connection.model<Document<appSettingTypes>>("app setting", appSetting)

//   export const checkoutFields = (connection: Connection) =>
//   connection.model<Document<checkoutFieldTypes>>(
//     "checkout field",
//     checkoutField
//   )

//   export const customerGroups = (connection: Connection) =>
//   connection.model<Document<customerGroupTypes>>(
//     "customer group",
//     customerGroup
//   )

//   export const customers = (connection: Connection) =>
//   connection.model<Document<customerTypes>>("customer", customer)

//   export const emailSettings = (connection: Connection) =>
//   connection.model<Document<emailSettingTypes>>("email setting", emailSetting)

//   export const emailTemplates = (connection: Connection) =>
//   connection.model<Document<emailTemplateTypes>>(
//     "email template",
//     emailTemplate
//   )

//   export const files = (connection: Connection) =>
//   connection.model<Document<fileTypes>>("file", file)

//   export const orders = (connection: Connection) =>
//   connection.model<Document<orderTypes>>("order", order)

//   export const pages = (connection: Connection) =>
//   connection.model<Document<pageTypes>>("page", page)

//   export const paymentGateways = (connection: Connection) =>
//   connection.model<Document<paymentGatewayTypes>>(
//     "payment gateway",
//     paymentGateway
//   )

//   export const paymentMethods = (connection: Connection) =>
//   connection.model<Document<paymentMethodTypes>>(
//     "payment method",
//     paymentMethod
//   )

//   export const productCategories = (connection: Connection) =>
//   connection.model<Document<productCategoryTypes>>(
//     "product categorie",
//     productCategory
//   )

//   export const products = (connection: Connection) =>
//   connection.model<Document<productTypes>>("product", product)

//   export const redirects = (connection: Connection) =>
//   connection.model<Document<redirectTypes>>("redirect", redirect)

//   export const settings = (connection: Connection) =>
//   connection.model<Document<settingTypes>>("setting", setting)

//   export const shippingMethods = (connection: Connection) =>
//   connection.model<Document<shippingMethodTypes>>(
//     "shipping method",
//     shippingMethod
//   )

// // SHOPX contains Methods

//   export const themeSettings = (connection: Connection) =>
//   connection.model<Document<themeSettingTypes>>("theme setting", themeSetting)

//   export const users = (connection: Connection) =>
//   connection.model<Document<userTypes>>("user", user)

//   export const webhooks = (connection: Connection) =>
//   connection.model<Document<webhookTypes>>("webhook", webhook)
