import {Sequelize, DataTypes} from "sequelize";
import { sequelize } from "../utils/database";

export const Product = sequelize.define("product",{
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
    type: DataTypes.STRING,
    allowNull: false
    },
    sku: {
        type: DataTypes.STRING(100),
        allowNull: false,
        unique: true
    },
    price: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
    },
    stockQuantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
    },  
    description: {
        type: DataTypes.TEXT
    },
    imageUrl: {
        type: DataTypes.STRING
    }
});