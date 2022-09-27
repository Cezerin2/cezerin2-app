import { product } from "@server/schema"
import { productTypes } from "@shopx/types"
import { Connection, Document } from "mongoose"

export const products = (connection: Connection) =>
  connection.model<Document<productTypes>>("product", product)
