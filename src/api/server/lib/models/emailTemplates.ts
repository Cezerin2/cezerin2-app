import { emailTemplate } from "@server/schema"
import { emailTemplateTypes } from "@shopx/types"
import { Connection, Document } from "mongoose"

export const emailTemplates = (connection: Connection) =>
  connection.model<Document<emailTemplateTypes>>(
    "email template",
    emailTemplate
  )
