import { page } from "@server/schema"
import { pageTypes } from "@shopx/types"
import { Connection, Document } from "mongoose"

export const pages = (connection: Connection) =>
  connection.model<Document<pageTypes>>("page", page)
