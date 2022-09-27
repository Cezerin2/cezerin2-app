import { checkoutFieldTypes } from "@shopx/types"
import { Schema, SchemaDefinition } from "mongoose"

const checkoutFieldSchema: SchemaDefinition<checkoutFieldTypes> = {
  name: String,
  label: String,
  placeholder: String,
  status: String,
}

export const checkoutField = new Schema<checkoutFieldTypes>(
  checkoutFieldSchema,
  {
    timestamps: true,
  }
)
