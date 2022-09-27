import { webhookTypes } from "@shopx/types"
import { Schema, SchemaDefinition } from "mongoose"

const webhookSchema: SchemaDefinition<webhookTypes> = {
  description: String,
  url: String,
  secret: String,
  enabled: Boolean,
  events: [String],
}

export const webhook = new Schema<webhookTypes>(webhookSchema, {
  timestamps: true,
})
