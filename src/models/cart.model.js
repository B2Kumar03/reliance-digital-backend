import mongoose from "mongoose";
import { type } from "os";

const cartSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  price: {
    type:String,
    required: true,
    trim: true,
  },
  img: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trime: true,
  },
  id:{
    type:String,
    required:true,
  },
  category: {
    type: String,
    required: true,
    trim: true,
  },
  rating: {
    type: String,
    required: true,
    trim: true,
  },
  available: {
    type: Boolean,
  },
});

const Cart = mongoose.model("Cart", cartSchema);

export default Cart
