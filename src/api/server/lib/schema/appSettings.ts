import { appSettingTypes } from "@shopx/types"
import { Schema, SchemaDefinition } from "mongoose"

const appSettingSchema: SchemaDefinition<appSettingTypes> = {
  key: String,
  code: String,
}

export const appSetting = new Schema<appSettingTypes>(appSettingSchema, {
  timestamps: true,
})
