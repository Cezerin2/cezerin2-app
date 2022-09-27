import { shippingMethod } from "@server/schema"
import { shippingMethodTypes } from "@shopx/types"
import { Connection, Document } from "mongoose"

export const shippingMethods = (connection: Connection) =>
  connection.model<Document<shippingMethodTypes>>(
    "shipping method",
    shippingMethod
  )
