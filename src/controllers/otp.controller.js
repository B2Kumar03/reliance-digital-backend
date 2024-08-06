import { asyncHandler } from "../utils/asynchandler.js";
import generateOTP from "../utils/generateOTP.js";
import sendOTP from "../utils/mailer.js";

const sentOTP = asyncHandler(async (req, res) => {
  const { email } = req.body;
  console.log(email);
  const otp = generateOTP();

  try {
    await sendOTP(email, otp);
   return res.status(200).json({ message: "OTP sent successfully", opt: otp });
  } catch (error) {
    return res.status(500).json({ message: "Error sending OTP", error });
  }
});

export {sentOTP};
