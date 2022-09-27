import { paymentMethodTypes } from "@shopx/types"
import { Schema, SchemaDefinition } from "mongoose"

const paymentMethodSchema: SchemaDefinition<paymentMethodTypes> = {
  name: String,
  enabled: Boolean,
  gateway: String,
  conditions: {
    countries: [String],
    shippingMethodIds: [Number],
    subtotalMin: Number,
    subtotalMax: Number,
  },
}

export const paymentMethod = new Schema<paymentMethodTypes>(
  paymentMethodSchema,
  {
    timestamps: true,
  }
)
