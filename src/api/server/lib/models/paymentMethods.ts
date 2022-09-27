import { paymentMethod } from "@server/schema"
import { paymentMethodTypes } from "@shopx/types"
import { Connection, Document } from "mongoose"

export const paymentMethods = (connection: Connection) =>
  connection.model<Document<paymentMethodTypes>>(
    "payment method",
    paymentMethod
  )
