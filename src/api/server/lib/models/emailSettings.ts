import { emailSetting } from "@server/schema"
import { emailSettingTypes } from "@shopx/types"
import { Connection, Document } from "mongoose"

export const emailSettings = (connection: Connection) =>
  connection.model<Document<emailSettingTypes>>("email setting", emailSetting)
