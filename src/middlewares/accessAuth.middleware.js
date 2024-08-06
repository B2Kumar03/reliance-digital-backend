import jwt from "jsonwebtoken";
import USER from "../models/user.model.js";
const accessAuthMiddleware = async (req, res, next) => {
  try {
    
    const authHeader = req.headers.authorization;
    
    if (!authHeader) {
    return  res.status(401).json({ error: "Unauthorized", data: [] });
    }
    const token = authHeader.split(" ")[1];
     console.log("token:",token);
    if (!token) {
      return res.status(401).json({ error: "Unauthorized", data: [] });
    }
    // verify token
    const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
  
    const user = await USER.findById(decodedToken?._id).select("-password -token");
    console.log(user);
    if (!user) throw new ApiError(401, "Unauthorized user");
    req.user = user;
    next();
  } catch (error) {
    res.status(401).json({message:error.message})
  }
};

export default accessAuthMiddleware;
