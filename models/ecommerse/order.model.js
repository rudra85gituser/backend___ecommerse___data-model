import mongoose from "mongoose";

const orderSchema = new mongoose.Schema
({
orderPrice: {
  type: Number,
  required: true
},
costumer:
{
  type:mongoose.Schema.Types.ObjectId,
  ref:"User",
},
orderItems:
{
  types: [orderItemSchema]
},
address:
{
  type: String,
  required: true
},
status:
{
  type: String,
  enum:['PENDING','CANCELLED','DELIVERED'],
  default:'PENDING',
},

},{timestamps: true});



//creating one more schema/model for orderitems as order items can be multipele in numbers
const orderItemsSchema = new mongoose.Schema({
  productId:
  {
    type:mongoose.Schema.Types.ObjectId,
    ref:"Product",
  },
  quentity:
  {
    type: Number,
    required: true,
  },
})



const Order = mongoose.model("Order" , orderSchema);
