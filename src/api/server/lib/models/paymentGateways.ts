import { paymentGateway } from "@server/schema"
import { paymentGatewayTypes } from "@shopx/types"
import { Connection, Document } from "mongoose"

export const paymentGateways = (connection: Connection) =>
  connection.model<Document<paymentGatewayTypes>>(
    "payment gateway",
    paymentGateway
  )
