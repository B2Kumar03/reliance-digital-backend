import Router from "express"
import getProjectWithId, {productGet} from "../controllers/product.controller.js"


const productRoute=Router()

productRoute.route("/products").get(productGet)

productRoute.route("/product-with-id").get(getProjectWithId)

export default productRoute