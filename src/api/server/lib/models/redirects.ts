import { redirect } from "@server/schema"
import { redirectTypes } from "@shopx/types"
import { Connection, Document } from "mongoose"

export const redirects = (connection: Connection) =>
  connection.model<Document<redirectTypes>>("redirect", redirect)
