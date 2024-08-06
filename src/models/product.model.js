import mongoose from "mongoose";
const productSchema = new mongoose.Schema({
  img: {
    type: String,
    required: true,
    trim: true,
  },
  name: {
    type: String,
    required: true,
    trim: true,
  },
  price: {
    type: String,
    required: true,
    trim: true,
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

const Product=mongoose.model("Product",productSchema)


export default Product
