import USER from "../models/user.model.js";
import { asyncHandler } from "../utils/asynchandler.js";


const register = asyncHandler(async (req, res) => {
  const { firstName, lastName, email, mobile } = req.body;
  if (!firstName || !firstName || !email || !mobile) {
    return res.status(201).json({ msg: "Please fill in all fields" });
  }
  const existingUser = await USER.findOne({ email });
  if (existingUser) {
    return res
      .status(201)
      .json({ msg: "Email already exists", success: false });
  }
  const user = {
    firstName,
    firstName,
    email,
    mobile,
  };
  const resdatabse = await USER.create(user);
  return res
    .status(201)
    .json({ msg: "User created successfully", success: true });
});



const login=asyncHandler((async(req,res)=>{
  const {email}=req.body
  
  if(!email){
    return res.status(401).json({message:"Email and password is required",success:false})
  }
  const findUser=await USER.findOne({
    email: email.toLowerCase().trim(),
  })

  if(!findUser){
    return res.status(200).json({message:"User not found",success:false})
  }
 
  const token=await findUser.generateAccessToken()
  if(!token){
    return res.status(200).json({message:"Error occurs while generating token",success:false})
  }
  findUser.token=token;
  await findUser.save({ validateBeforeSave: false });
  return res.status(200).json({token:token,success:true})

}))

const getUser=asyncHandler(async(req,res)=>{
  console.log(req);
  const user=await USER.findById(req.user._id).select(" -token")
  if(!user){
    return res.status(404).json({message:"User not found",success:false})
  }
  return res.status(200).json({user:user,success:true})
})

export {register,login,getUser}
