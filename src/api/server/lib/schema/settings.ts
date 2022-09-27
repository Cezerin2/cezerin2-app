import { settingTypes } from "@shopx/types"
import { Schema, SchemaDefinition } from "mongoose"

export const settingSchema: SchemaDefinition<settingTypes> = {
  storeName: String,
  domain: String,
  logoFile: String,
  language: String,
  currencyCode: String,
  currencySymbol: String,
  currencyFormat: String,
  thousandSeparator: String,
  decimalSeparator: String,
  decimalNumber: Number,
  timezone: String,
  dateFormat: String,
  timeFormat: String,
  defaultShippingCountry: String,
  defaultShippingState: String,
  defaultShippingCity: String,
  defaultProductSorting: String,
  productFields: String,
  productsLimit: Number,
  weightUnit: String,
  lengthUnit: String,
  hideBillingAddress: Boolean,
  orderConfirmationCopyTo: String,
  logo: String,
  minInventoryLimit: Number,
}

export const setting = new Schema<settingTypes>(settingSchema, {
  timestamps: true,
})
