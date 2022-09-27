import { emailSettingTypes } from "@shopx/types"
import { Schema, SchemaDefinition } from "mongoose"

const emailSettingSchema: SchemaDefinition<emailSettingTypes> = {
  host: String,
  port: Number,
  secure: Boolean,
  user: String,
  pass: String,
  fromName: String,
  fromAddress: String,
}

export const emailSetting = new Schema<emailSettingTypes>(emailSettingSchema, {
  timestamps: true,
})
