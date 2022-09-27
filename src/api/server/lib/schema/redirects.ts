import { redirectTypes } from "@shopx/types"
import { Schema, SchemaDefinition } from "mongoose"

const redirectSchema: SchemaDefinition<redirectTypes> = {
  from: String,
  to: String,
  status: Number,
}

export const redirect = new Schema<redirectTypes>(redirectSchema, {
  timestamps: true,
})
