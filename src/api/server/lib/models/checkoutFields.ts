import { checkoutField } from "@server/schema"
import { checkoutFieldTypes } from "@shopx/types"
import { Connection, Document } from "mongoose"

export const checkoutFields = (connection: Connection) =>
  connection.model<Document<checkoutFieldTypes>>(
    "checkout field",
    checkoutField
  )
