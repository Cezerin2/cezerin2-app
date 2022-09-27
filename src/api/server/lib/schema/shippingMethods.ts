import { shippingMethodTypes } from "@shopx/types"
import { Schema, SchemaDefinition } from "mongoose"

const shippingMethodSchema: SchemaDefinition<shippingMethodTypes> = {
  name: String,
  enabled: Boolean,
  conditions: [
    {
      countries: [String],
      states: [String],
      cities: [String],
      subtotalMin: Number,
      subtotalMax: Number,
      weightTotalMin: Number,
      weightTotalMax: Number,
    },
  ],
}

export const shippingMethod = new Schema<shippingMethodTypes>(
  shippingMethodSchema,
  {
    timestamps: true,
  }
)
