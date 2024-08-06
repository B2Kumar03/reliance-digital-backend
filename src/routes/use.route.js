import { Router  } from "express";
import { getUser,login, register } from "../controllers/user.controller.js";
import accessAuthMiddleware from "../middlewares/accessAuth.middleware.js"


const userRoute=Router()

userRoute.route("/register").post(register)
// userRoute.route("/exist").post(isUserExist)
userRoute.route("/login").post(login)
userRoute.route("/get-user").get(accessAuthMiddleware,getUser)


export default userRoute
