import { Router } from "express";
import { addCart, getCart, removeCart } from "../controllers/cart.controller.js";
import accessAuthMiddleware from "../middlewares/accessAuth.middleware.js";

const cartRouter=Router()

cartRouter.route("/add-cart").post(addCart)
cartRouter.route("/remove-cart").delete(removeCart)
cartRouter.route("/get-cart").get(accessAuthMiddleware,getCart)


export default cartRouter