import express from "express";
import cors from "cors";
import USER from "./models/user.model.js";
const app = express();
app.use(cors({
    origin: '*', // Allows all origins
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
  }));
  
  app.use(express.json({ limit: "16kb" }));
  app.use(express.urlencoded({ extended: true, limit: "16kb" }));
  app.use(express.static("public")); 

  app.get("/api/v1/users",async(req,res)=>{
    await USER.create({
      firstname: "John",
      lastname: "Doe",
      email: "john@example.com",
      password: "password123",
      mobile:22345678

    })
    res.send("Hello from express server")
  })


  export default app;