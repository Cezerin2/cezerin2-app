import { emailTemplateTypes } from "@shopx/types"
import { Schema, SchemaDefinition } from "mongoose"

const emailTemplateSchema: SchemaDefinition<emailTemplateTypes> = {
  name: String,
  link: String,
  subject: String,
  body: String,
}

export const emailTemplate = new Schema<emailTemplateTypes>(
  emailTemplateSchema,
  {
    timestamps: true,
  }
)
