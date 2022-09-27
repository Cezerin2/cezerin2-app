import { productCategory } from "@server/schema"
import { productCategoryTypes } from "@shopx/types"
import { Connection, Document } from "mongoose"

export const productCategories = (connection: Connection) =>
  connection.model<Document<productCategoryTypes>>(
    "product categorie",
    productCategory
  )
