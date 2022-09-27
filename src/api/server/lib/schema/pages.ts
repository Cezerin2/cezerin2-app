import { pageTypes } from "@shopx/types"
import { Schema, SchemaDefinition } from "mongoose"

const pageSchema: SchemaDefinition<pageTypes> = {
  path: String,
  slug: String,
  metaTitle: String,
  metaDescription: String,
  enabled: Boolean,
  isSystem: Boolean,
  content: String,
}

export const page = new Schema<pageTypes>(pageSchema, { timestamps: true })
