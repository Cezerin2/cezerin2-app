import { appSetting } from "@server/schema"
import { appSettingTypes } from "@shopx/types"
import { Connection, Document } from "mongoose"

export const appSettings = (connection: Connection) =>
  connection.model<Document<appSettingTypes>>("app setting", appSetting)
