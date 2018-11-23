class ExpressConnection{
    connect(port, app) {
        app.listen(port, () => console.log("Servidor rodando local na porta 3000"));
    }
}

module.exports = ExpressConnection
