import { webhook } from "@server/schema"
import { webhookTypes } from "@shopx/types"
import { Connection, Document } from "mongoose"

export const webhooks = (connection: Connection) =>
  connection.model<Document<webhookTypes>>("webhook", webhook)
