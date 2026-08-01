import {Sequelize, DataTypes} from "sequelize";
import { sequelize } from "../utils/database.js";

export const Category = sequelize.define("category",{
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
    type: DataTypes.STRING,
    allowNull: false
    }
});