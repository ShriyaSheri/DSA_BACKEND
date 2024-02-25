import express from "express";
import { addcategory, getallcategories, getbyid, updatecategory } from "../Controller/categorycontroller.js";


const router=express.Router();

router.post("/add",addcategory)
router.get("/show",getallcategories)
router.delete("/delete",)
router.patch("/update/:id",updatecategory)
router.get("/show/:id",getbyid)


export default router;


