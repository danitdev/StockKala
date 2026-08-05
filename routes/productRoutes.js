import express from "express";
import { getCreateProduct, getProducts } from "../controllers/productController.js";


const router = express.Router();

router.get("/",getProducts);
router.get("/create",getCreateProduct);
export{router};