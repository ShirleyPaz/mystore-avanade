const express = require("express");
const app = express();

class ExpressConnection{
    conectar(port) {
        app.use(bodyParser.json());
        server.use(bodyParser.urlencoded({ extended: true }))
        app.listen(port, () => console.log("Servidor rodando local na porta 3000"));
    }
}

module.exports = ExpressConnection
