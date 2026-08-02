import { Category } from "../models/category.js";
export const getCategories = (req,res,next)=>{
    Category.findAll()
        .then(categories=>{
            res.render("categories/list",{categories:categories,pageTitle:"All Categories",path:"/categories"});
        })
        .catch(err=>console.log(err));
};
export const getEditCategories = (req,res,next)=>{
    const categoryId = req.params.categoryId;
    Category.findByPk(categoryId)
        .then(category=>{
            res.render("categories/edit-category",{pageTitle:"Edit Category",path:"/categories",category});
        })
        .catch(err=>console.log(err));
};