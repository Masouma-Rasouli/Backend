import User from "../models/usersSchema.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"

export const login = async (req, res, next) => {
  try {
    const foundUser = await User.findOne({
      email: req.body.email,
      // password: req.body.password
    });

    if (foundUser) {
      const check= await bcrypt.compare(req.body.password, foundUser.password);
      if(check){

const token = jwt.sign(
  {_id:foundUser._id, email: foundUser.email},
  process.env.SECRET_KEY,
  {issuer: "Masouma",expiresIn: '1h'}
  );

res.header("token", token).send({ msg: `welcome back,  ${newUser.firstName}` })
} else {res.send("incorrect password")}
    } else {
      res.send("incorrect email");
    }
  }
  
  catch (error) {
    next(error);
  }
};

export const register = async (req, res, next) => {
  try {
  // here is how to hash the pass
    const hashpassword= await bcrypt.hashSync(req.body.password, 10);
    const newUser = await User.create({...req.body, password: hashpassword}); //this line says all req.body remains same, except password should be hashpassword
    res.status(200).send({message: `you have registered successfully, ${newUser.firstName}`});

  } catch (error) {
    next(error);
  }
};


export const updateUser = async (req, res, next) => {
try{
const user= await User.findByIdAndUpdate(req.param.id, req.body, {new:true});

res.send(user);} catch (error) {next(error)}
};

export const deleteUser = async (req, res, next) => {
    try {
      const userId = req.params.id; // Assuming user ID is in the request parameters
  const filterUser= await User.findById(userId)
      // Use the model's remove or delete method to delete the user
      const deletedUser = await User.findByIdAndDelete(userId);
  
      if (!filterUser) {
        return res.status(404).json({ message: "User not found" });
      }
  
      res.json({ message: "User deleted successfully", deletedUser });
    } catch (error) {
      next(error);
    }
  };

export const getAllUsers = async (req, res, next) => {
try{
  const allUsers = await User.find();
  res.send(allUsers)
}
catch(err){
  next(err)
}


};
