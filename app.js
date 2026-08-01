import express from "express";
import bodyParser from "body-parser";
import rootDir from "./utils/path.js";
import { sequelize } from "./utils/database.js";

const app = express();

app.set("view engine","ejs");
app.set("views","views")
app.use(bodyParser.urlencoded({extend:false}));


sequelize.sync()
    .then(result=>{
        app.listen(3000);
    })
    .catch(err=>{console.log(err);})