import {Router} from "express"
const router= Router();
  // or import express from "express" and then const router=express.Router( )
 import {login, register, updateUser, deleteUser,getAllUsers} from "../contollers/userControllers.js"


  router.post("/login", login)
  router.post('/register', register)
  router.patch('/update/:id', updateUser)
  router.delete('/delete/:id', deleteUser)
  router.get("/allUsers",getAllUsers)
 



export default router ;


