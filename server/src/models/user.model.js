import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    trime: true,
  },
  firstname: {
    type: String,
    trime: true,
    required: true,
  },

  lastname: {
    type: String,
    trime: true,
    required: true,
  },

  mobile: {
    type: String,
    trime: true,
    required: true,
  },
});
