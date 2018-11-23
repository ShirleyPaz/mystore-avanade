const EntitySchema = require("typeorm").EntitySchema; // import {EntitySchema} from "typeorm";
const Product = require("../model/product").Product; // import {Post} from "../model/Post";

module.exports = new EntitySchema({
    name: "Product",
    target: Product,
    columns: {
        product_uid: {
            primary: true,
            type: "bigint",
            generated: true
        },
        product_code: {
            type: "integer"
        },
        description: {
            type: "varchar"
        }
    },
});