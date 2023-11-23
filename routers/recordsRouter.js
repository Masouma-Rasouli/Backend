import {Router} from "express"
const router =Router()
import {getAllRecords, getSingleRecords,createRecords, updateRecords, deleteRecords  } from "../contollers/recordControllers.js"

router.get("/allrecords", getAllRecords)
router.get("/singlerecord/:id", getSingleRecords)
router.post ("/newrecord", createRecords)
router.patch("/update/:id", updateRecords)
router.delete("/delete/:id", deleteRecords)

export default router