const connection = require('../database/database')
const express = require('express')
const router = express.Router()


  connection.then(async connection => {
    const productRepository = connection.getRepository(Product);

    router.get("/products/", async function(req, res) {
      res.send(await productRepository.find());
    });

    router.get("/products/:id", async function(req, res) {
      res.send(await productRepository.findOne({ code: req.query.id }));
    });

    router.post("/products", async (req, res) => {
      res.send(await productRepository.save(req.body));
    });
  })
  .catch(error => {
    console.error("Error: ", error);
  });

module.exports = ProductsRoute;


