const connection = require('../database/database')
const express = require('express')
const routes = express.Router()


connection.then( connection => {
    const productRepository = connection.getRepository("Product");

    routes.get("/products", async function(req, res) {
      res.send(await productRepository.find());
    });

    routes.get("/products/:id", async function(req, res) {
      res.send(await productRepository.findOne({ code: req.params.id }));
    });

    routes.post("/products", async (req, res) => {
      res.send(await productRepository.save(req.body));
    });
  })
  .catch(error => {
    console.error("Error: ", error);
  });

module.exports = routes;


