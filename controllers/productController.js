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
export const postCreateProduct = (req,res,next)=>{
    const name = req.body.name;
    const sku = req.body.sku;
    const price = req.body.price;
    const stockQuantity = req.body.stockQuantity;
    const description = req.body.description;
    const imageUrl = req.body.imageUrl;
    Product.create({
        name,
        sku,
        price,
        stockQuantity,
        description,
        imageUrl
    })
        .then(()=>res.redirect("/products"))
        .catch(err=>console.log(err));
};