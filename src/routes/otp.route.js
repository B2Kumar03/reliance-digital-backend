import { Router } from "express";
import { sentOTP } from "../controllers/otp.controller.js";

const otpRouter=Router()


otpRouter.route("/sent-otp").get(sentOTP)


export default otpRouter