import mongoose from "mongoose";

const productSchema = new mongoose.Schema
({
  description:
  {
  required: true,
  type: string
  },
  name:
  {
  required: true,
  type: string
  },
  productImage:
  {
    type: Stirng
  },
  price:
  {
    type:number,
    default:0
  },
  stock:
  {
    type:number,
    default:0
  },
  category:
  {
    type:mongoose.Schema.Types.ObjectId,
    ref:"Category",
    required: true
  },
  owner:
  {
    type:mongoose.Schema.Types.ObjectId,
    ref:"User",
  },
},{timestamps: true});

const Product = mongoose.model("Product" , productSchema);
