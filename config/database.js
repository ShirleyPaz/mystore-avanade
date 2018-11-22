const typeorm = require('typeorm')

class DatabasePD {
    constructor(post, host) {
        this.port = post;
        this.host = host;
    }

    conectar() {
        typeorm.createConnection({
            type: "postgres",
            host: this.host,
            port: this.port,
            username: "avanade",
            password: "natura",
            database: "products",
            synchronize: true,
            entitySchemas: [
            ]
        })
    }
}

module.exports = DatabasePD;