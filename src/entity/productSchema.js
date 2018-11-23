const EntitySchema = require("typeorm").EntitySchema; // import {EntitySchema} from "typeorm";
const Product = require("../model/product").Product; // import {Post} from "../model/Post";

module.exports = new EntitySchema({
    name: "Product",
    target: Product,
    columns: {
        id: {
            primary: true,
            type: "bigint",
            generated: true
        },
        code: {
            type: "int",
            generated: true
        },
        description: {
            type: "varchar"
        }
    }
})