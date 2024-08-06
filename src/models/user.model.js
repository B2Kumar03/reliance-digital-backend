import mongoose from "mongoose";
import jwt from "jsonwebtoken"
const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    trime: true,
  },
  firstName: {
    type: String,
    trime: true,
    required: true,
  },

  firstName: {
    type: String,
    trime: true,
    required: true,
  },

  mobile: {
    type: String,
    trime: true,
    required: true,
  },
  otp: {
    type: Number,
  },
  token: {
    type: String,
    trime: true,
  },
});

userSchema.methods.generateAccessToken = async function () {
  return await jwt.sign(
    {
      _id: this._id,
      email: this.email,
      firstname: this.firstname,
    },
    process.env.ACCESS_TOKEN_SECRET,
    {
      expiresIn: process.env.ACCESS_TOKEN_EXPIRY,
    }
  );
};

const USER = mongoose.model("USER", userSchema);

export default USER;
