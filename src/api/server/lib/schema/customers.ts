import { customerTypes } from "@shopx/types"
import { Schema, SchemaDefinition, Types } from "mongoose"

const { ObjectId } = Types

const customerSchema: SchemaDefinition<customerTypes> = {
  totalSpent: Number,
  ordersCount: Number,
  note: String,
  email: String,
  mobile: String,
  fullName: String,
  firstName: String,
  lastName: String,
  password: String,
  gender: String,
  groupID: ObjectId,
  tags: [String],
  socialAccounts: [String],
  birthdate: Number,
  addresses: [String],
}

export const customer = new Schema<customerTypes>(customerSchema, {
  timestamps: true,
})
