const typeorm = require('typeorm')

const DatabasePD =
    typeorm.createConnection({
        type: "postgres",
        host: "localhost",
        port: 5432,
        username: "avanade",
        password: "natura",
        database: "products",
        synchronize: true,
        entities: [
            require("../entity/productSchema"),
        ]
    })

module.exports = DatabasePD;