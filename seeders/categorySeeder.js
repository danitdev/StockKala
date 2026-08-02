import { Category } from "../models/category.js";
export const seedCategories = ()=>{
    return Category.count() 
        .then(count=>{
            if(count === 0){
                return Category.bulkCreate([{name: "Laptops"},{name:"Mice"},{name:"Graphic Cards"},{name:"Storage"}]);
            }
            return null;
        })
        .then(result=>{
            if(result) console.log("Categories seeded");
        })
        .catch(err=>console.log(err));
};