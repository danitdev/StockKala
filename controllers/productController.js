import {Product} from "../models/product.js"
export const getProducts = (req,res,next)=>{
    Product.findAll()
        .then(products=>{
            res.render("products/index",{products:products,pageTitle:"Products",path:"/products"});
        })
        .catch(err=>console.log(err));
};
export const getCreateProduct = (req,res,next)=>{
    res.render("products/create",{pageTitle:"Add Product",path:"/products/create"});
};
