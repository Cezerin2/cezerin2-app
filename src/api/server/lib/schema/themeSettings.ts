import { themeSettingTypes } from "@shopx/types"
import { Schema, SchemaDefinition } from "mongoose"

const themeSettingSchema: SchemaDefinition<themeSettingTypes> = {
  general: { companyImage: String },
  theme: { color: String, backgroundColor: String },
  navbar: {
    items: [{ name: String, link: String }],
  },
  home: {
    carousel: { enabled: Boolean, images: [{ ID: String, alt: String }] },
  },
  footer: {
    socialMedia: {
      enabled: Boolean,
      title: String,
      link: String,
      items: [{ icon: String, link: String }],
    },
    company: { name: String, description: String },
    col1: {
      title: String,
      items: [{ name: String, link: String }],
    },
    col2: {
      title: String,
      items: [{ name: String, link: String }],
    },
    contact: {
      enabled: Boolean,
      link: String,
      items: [{ name: String, icon: String, link: String }],
    },
  },
}

export const themeSetting = new Schema<themeSettingTypes>(themeSettingSchema, {
  timestamps: true,
})
