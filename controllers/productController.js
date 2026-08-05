import {Product} from "../models/product.js"
export const getProducts = (req,res,next)=>{
    // Category.findAll()
    //     .then(categories=>{
    //         res.render("categories/list",{categories:categories,pageTitle:"All Categories",path:"/categories"});
    //     })
    //     .catch(err=>console.log(err));
    Product.findAll()
        .then(products=>{
            res.render("products/index",{products:products,pageTitle:"Products",path:"/products"});
        })
        .catch(err=>console.log(err));
};
