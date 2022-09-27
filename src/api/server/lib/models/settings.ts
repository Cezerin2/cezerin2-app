import { setting } from "@server/schema"
import { settingTypes } from "@shopx/types"
import { Connection, Document } from "mongoose"

export const settings = (connection: Connection) =>
  connection.model<Document<settingTypes>>("setting", setting)
