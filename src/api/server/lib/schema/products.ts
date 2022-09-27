import { productTypes } from "@shopx/types"
import { Schema, SchemaDefinition, Types } from "mongoose"

const { ObjectId } = Types

const productSchema: SchemaDefinition<productTypes> = {
  name: String,
  slug: String,
  categoryID: ObjectId,
  regularPrice: Number,
  stockQuantity: Number,
  enabled: Boolean,
  discontinued: Boolean,
  isPreOrder: Boolean,
  allowBackOrder: Boolean,
  isBidded: Boolean,
  attributes: [
    {
      name: String,
      value: String,
    },
  ],
  dateSaleFrom: Number,
  dateSaleTo: Number,
  dateStockExpected: Number,
  stockTracking: Boolean,
  images: [
    {
      id: ObjectId,
      alt: String,
    },
  ],
  position: Number,
  salePrice: Number,
  sku: String,
  weight: Number,
  description: String,
  options: [
    {
      name: String,
      control: String,
      required: Boolean,
      position: Number,
      values: [String],
    },
  ],
  variants: [ObjectId],
}

export const product = new Schema<productTypes>(productSchema, {
  timestamps: true,
})
