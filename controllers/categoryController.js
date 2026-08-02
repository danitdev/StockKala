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
            if(!category) return res.redirect("/");
            res.render("categories/edit-category",{pageTitle:"Edit Category",path:"/categories",category});
        })
        .catch(err=>console.log(err));
};
export const postEditCategories = (req,res,next)=>{
    const categoryId = req.params.categoryId;
    const updatedName = req.body.name;
    console.log(updatedName);
    console.log(categoryId);
    Category.findByPk(categoryId)
        .then(category=>{
            category.name = updatedName;
            return category.save();
        })
        .then(result=>{
            console.log("Updated CATEGORY!");
            res.redirect("/categories");
        })
        .catch(err => console.log(err));
};
export const postDeleteCategories = (req,res,next)=>{
    const categoryId = req.params.categoryId;
    Category.findByPk(categoryId)
        .then(category => {
            return category.destroy();
        })
        .then(result=>{
            console.log("DESTROYED PRODUCT");
            res.redirect("/categories");
        })
        .catch(err=>console.log(err));
};