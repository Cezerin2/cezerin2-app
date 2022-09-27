import { paymentGatewayTypes } from "@shopx/types"
import { Schema, SchemaDefinition } from "mongoose"

const paymentGatewaySchema: SchemaDefinition<paymentGatewayTypes> = {
  none: [
    {
      name: String,
      details: String,
      comment: String,
    },
  ],
  transfer: [
    {
      name: String,
      fullName: String,
      sortCode: String,
      accountNumber: String,
      IBAN: String,
      SWIFT: String,
      address: String,
      referenceNumber: String,
      bankAddress: String,
      details: String,
      comment: String,
    },
  ],
  eft: [
    {
      name: String,
      env: String,
    },
  ],
  card: [
    {
      name: String,
      env: String,
    },
  ],
  crypto: [
    {
      name: String,
      env: String,
    },
  ],
  paypal: [
    {
      name: String,
      env: String,
      clientID: String,
    },
  ],
  paypalMe: [{ name: String, env: String, email: String }],
  stripe: [
    {
      name: String,
      publishableKey: String,
      secretKey: String,
    },
  ],
  liqpay: [
    {
      name: String,
      env: String,
    },
  ],
}

export const paymentGateway = new Schema<paymentGatewayTypes>(
  paymentGatewaySchema,
  {
    timestamps: true,
  }
)
