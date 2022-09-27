import { productCategoryTypes } from "@shopx/types"
import { Schema, SchemaDefinition, Types } from "mongoose"

const { ObjectId } = Types

const productCategorySchema: SchemaDefinition<productCategoryTypes> = {
  name: String,
  slug: String,
  icon: String,
  children: [ObjectId],
  isRoot: Boolean,
  enabled: Boolean,
}

export const productCategory = new Schema<productCategoryTypes>(
  productCategorySchema,
  {
    timestamps: true,
  }
)
