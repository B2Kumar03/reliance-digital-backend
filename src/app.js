import express from "express";
import cors from "cors";
import USER from "./models/user.model.js";

import otpRouter from "./routes/otp.route.js";
import productRoute from "./routes/product.route.js";
import cartRouter from "./routes/cart.route.js";
import userRoute from "./routes/use.route.js";
const app = express();
app.use(cors({
    origin: '*', // Allows all origins
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
  }));
  
  app.use(express.json({ limit: "16kb" }));
  app.use(express.urlencoded({ extended: true, limit: "16kb" }));
  app.use(express.static("public")); 
  
  app.use("/api/v1/users",otpRouter)

  app.use("/api/v1/users",productRoute)

  app.use("/api/v1/users",cartRouter)


  app.use("/api/v1/users",userRoute)

  app.use("/api/v1/users",cartRouter)

  export default app;