import { customer } from "@server/schema"
import { customerTypes } from "@shopx/types"
import { Connection, Document } from "mongoose"

export const customers = (connection: Connection) =>
  connection.model<Document<customerTypes>>("customer", customer)
