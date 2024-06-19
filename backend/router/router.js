import express from 'express'
import { bankFrom,bankdata,bankget,page1 ,deletedata,editdata,updatedata} from '../controller/controller.js'
const router = express.Router()

router.get('/page1',page1)
router.get("/page2",bankFrom)
router.post ("/insert",bankdata)
router.get("/get",bankget)
router.delete('/delete/:id',deletedata)
router.get("/edit/:id", editdata)
router.post("/update/:id", updatedata)

export default router
