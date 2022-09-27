import { order } from "@server/schema"
import { orderTypes } from "@shopx/types"
import { Connection, Document } from "mongoose"

export const orders = (connection: Connection) =>
  connection.model<Document<orderTypes>>("order", order)
