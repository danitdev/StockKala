import express from "express";
import path from "path";
import bodyParser from "body-parser";
import rootDir from "./utils/path.js";
import { sequelize } from "./utils/database.js";
import { Product } from "./models/product.js";
import { Category } from "./models/category.js";


const app = express();

app.set("view engine","ejs");
app.set("views","views")
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(rootDir,"public")));


Product.belongsTo(Category);
Category.hasMany(Product);



sequelize.sync({force:true})
    .then(result=>{
        app.listen(3000);
    })
    .catch(err=>{console.log(err);})