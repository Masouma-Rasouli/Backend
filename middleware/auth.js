import jwt from "jsonwebtoken"
import User from "::/models/userSchema.js"
export const auth =async (req, res, next) => {
    try {
        const token= req.header.token;
       const payload =jwt.verify(token, process.env.SECRET_KEY); // it verify the token , it takes two argument.  
       if (payload){const user= await User.findById(payload._id); // if everything is fine, find the id
    req.user= user; // After successfully verifying the token and retrieving user information from the database, the user data is assigned to req.user. This is a common pattern in authentication middleware where subsequent middleware or route handlers can access the authenticated user's information through req.user.
next()}
        
    } catch (error) {
        next(error)
    }
}