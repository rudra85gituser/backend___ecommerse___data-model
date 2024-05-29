import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
  name:
  {
    type: String,
    required: true,
  },
},{timestamps: true});

const Catetory = mongoose.model("Category" , categorySchema);
