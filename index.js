const express = require("express");
const app = express();

class ExpressConnection{
    conectar(port) {
        app.listen(port, () => console.log("Servidor rodando local na porta 3000"));
        app.use(bodyParser.json());
    }
}

module.exports = ExpressConnection
