import {Router} from "express"
const router= Router();
  // or import express from "express" and then const router=express.Router( )
 import {getAllOrders,getSingleOrders,createOrders,updateOrders, deleteOrders} from "../contollers/orderControllers.js"


router.get("/allorders", getAllOrders)
router.get("/singleorder/:id", getSingleOrders)
router.post ("/neworder", createOrders)
router.patch("/update/:id", updateOrders)
router.delete("/delete/:id", deleteOrders) 
 



export default router ;

