import { customerGroupTypes } from "@shopx/types"
import { Schema, SchemaDefinition } from "mongoose"

const customerGroupSchema: SchemaDefinition<customerGroupTypes> = {
  name: String,
  description: String,
}

export const customerGroup = new Schema<customerGroupTypes>(
  customerGroupSchema,
  {
    timestamps: true,
  }
)
