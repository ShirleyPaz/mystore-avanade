const EntitySchema = require("typeorm").EntitySchema; // import {EntitySchema} from "typeorm";
const Product = require("../model/product").Product; // import {Post} from "../model/Post";

module.exports = new EntitySchema({
    name: "Product",
    target: Product,
    columns: {
        product_uid: {
            primary: true,
            type: "uuid",
            generated: "uuid"
        },
        product_code: {
            type: "int",
            unique: true
        },
        description: {
            type: "varchar"
        }
    }
})