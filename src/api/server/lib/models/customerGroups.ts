import { customerGroup } from "@server/schema"
import { customerGroupTypes } from "@shopx/types"
import { Connection, Document } from "mongoose"

export const customerGroups = (connection: Connection) =>
  connection.model<Document<customerGroupTypes>>(
    "customer group",
    customerGroup
  )
