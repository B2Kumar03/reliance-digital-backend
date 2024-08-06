import { asyncHandler } from "../utils/asynchandler.js";
import Cart from "../models/cart.model.js";

const addCart = asyncHandler(async (req, res) => {
  const { email, img, name, category, rating, available, price, _id } = req.body;
 
  const isExist = await Cart.findOne({ id:_id });
  if (isExist) {
    return res
      .status(200)
      .json({ message: "This product alredy is cart", success: false });
  }
  const cartValue = {
    email,
    img,
    name,
    category,
    rating,
    available,
    price,
    id:_id,
  };
  const cart = await Cart.create(cartValue);
  res
    .status(200)
    .json({ message: "Product added to cart", success: true, cart });
});

const removeCart = asyncHandler(async (req, res) => {
  const { itemId } = req.body;
  console.log(itemId);
  const remove = await Cart.deleteOne({ _id: itemId });
  console.log(remove);

  res.status(200).json({
    success: true,
    message: "Item removed from cart successfully",
    cart: remove,
  });
});

const getCart = asyncHandler(async (req, res) => {
  const email  = req.user.email;
   console.log(email);
  let userCart = await Cart.find({ email });
console.log(userCart);
  if (!userCart) {
    return res.status(200).json({
      success: false,
      message: "Cart not found",
    });
  }

  res.status(200).json({
    success: true,
    cart: userCart,
  });
});

export { addCart, removeCart, getCart };
