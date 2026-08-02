import express from "express";
import { getAddCategories, getCategories, getEditCategories, postAddCategoris, postDeleteCategories, postEditCategories } from "../controllers/categoryController.js";
const router = express.Router();



router.get("/",getCategories);
router.get("/edit/:categoryId",getEditCategories);
router.post("/edit/:categoryId",postEditCategories);
router.post("/delete/:categoryId",postDeleteCategories);
router.get("/add",getAddCategories);
router.post("/add",postAddCategoris);
export{router};