import {body, validationResult} from "express-validator"
import {capitalize} from "../helper/capitalize.js"
import User from "../models/usersSchema.js"


export const userRegisterValidation=[
    body("email").exists().withMessage("enter your email").isEmail().withMessage("please enter accurate email").trim().normalizeEmail(),

    body("password").exists().trim().isLength({min:8, max:16}).withMessage("your password should have maximum 16 and minimum 8 characters"). matches( /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/).withMessage("alpha, numbers, a charecter must be included"),

    body("firstName").exists().trim().escape().isAlpha(),
    body("lasttName").exists().trim().escape().isAlpha(),

  // as a 5th argument we say: 
    (req, res, next)=>{
        const errors=validationResult(req); // if everything is validated and our above condition is met .withMessage
        if(errors.isEmpty()) // or if errors.array().length===0
{req.body.firstName=capitalize(req.body.firstName), next()} else{res.send(errors)};
    }
]




// (?=.*[a-z]): Requires at least one lowercase letter.
// (?=.*[A-Z]): Requires at least one uppercase letter.
// (?=.*\d): Requires at least one digit.
// (?=.*[@$!%*?&]): Requires at least one of the specified special characters.
// [A-Za-z\d@$!%*?&]+: Matches the actual content of the password, ensuring it consists of letters (both uppercase and lowercase), digits, and the specified special characters.