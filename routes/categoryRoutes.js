import express from "express";
import { getCategories, getEditCategories, postEditCategories } from "../controllers/categoryController.js";
const router = express.Router();



router.get("/",getCategories);
router.get("/edit/:categoryId",getEditCategories);
router.post("/edit/:categoryId",postEditCategories);
export{router};