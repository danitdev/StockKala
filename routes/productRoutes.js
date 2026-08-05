import express from "express";
import { getCreateProduct, getProducts, postCreateProduct } from "../controllers/productController.js";


const router = express.Router();

router.get("/",getProducts);
router.get("/create",getCreateProduct);
router.post("/create",postCreateProduct);

export{router};