import { Schema, model } from "mongoose";

const OrderSchema = new Schema({
  records: [{}],
  totalPrice: { type: Number, required: true },
  userId: { type: String, required: true },
});
const OrderModel = model("Order", OrderSchema);
export default OrderModel;
