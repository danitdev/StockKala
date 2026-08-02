import { Category } from "../models/category.js";
export const getCategories = (req,res,next)=>{
    Category.findAll()
        .then(categories=>{
            res.render("categories/list",{categories:categories,pageTitle:"All Categories",path:"/categories"});
        })
        .catch(err=>console.log(err));
};