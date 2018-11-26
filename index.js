const Server =  require('./server');
const bodyParser = require('body-parser')
const routes = require('./src/routes/productsRoutes')
const express = require('express')
const app = express()

function main() {
    const server = new Server();
    app.use(bodyParser.json());
    // app.use(bodyParser.urlencoded({ extended: true }))
    app.use("/api", routes);

    server.connect(3000, app)
}

main()

