import { webhookTypes } from "@shopx/types"
import { Schema, SchemaDefinition } from "mongoose"

const webhookSchema: SchemaDefinition<webhookTypes> = {
  name: String,
  email: String,
  scopes: [String],
  is_revoked: Boolean,
  expiration: Number,
}

export const webhook = new Schema<webhookTypes>(webhookSchema, {
  timestamps: true,
})
