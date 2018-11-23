const Server =  require('./server');
const bodyParser = require('body-parser')
const routes = require('./src/routes/productsRoutes')
const express = require('express')
const app = express()

async function main() {
    const server = new Server();
    app.use(bodyParser.json());
    app.use("api", routes);
    server.connect(3000, app)
}

main()

