import express from "express";
import path from "path";
import bodyParser from "body-parser";
import rootDir from "./utils/path.js";
import { router as categoryRouter} from "./routes/categoryRoutes.js";
import { sequelize } from "./utils/database.js";
import { Product } from "./models/product.js";
import { Category } from "./models/category.js";
import { seedCategories } from "./seeders/categorySeeder.js";

const app = express();

app.set("view engine","ejs");
app.set("views","views")
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(rootDir,"public")));


app.use("/categories",categoryRouter);

Product.belongsTo(Category);
Category.hasMany(Product);



sequelize.sync({force:false})
    .then(()=>{
        return seedCategories();
    })
    .then(()=>{
        app.listen(3000);
    })
    .catch(err=>{console.log(err);})