const express = require("express");
const app = express();

class ExpressConnection{
    conectar() {
        app.listen(3000, () => console.log("Servidor rodando local na porta 3000"));
    }
}

module.exports = ExpressConnection
