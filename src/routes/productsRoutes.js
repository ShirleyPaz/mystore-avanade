const connection = require('../database/database')
const express = require('express')
const app = express()
const routes = express.Router()
const Joi = require('joi');

connection.then(connection => {
  const repo = connection.getRepository("Product");

  routes.get("/products", async function (req, res) {
    res.send(await repo.find());
  });

  routes.get("/products/:id", async function (req, res) {
    const product = await repo.findOne({ product_code: req.params.id })
    if (product) {
      res.status(200).send(product);
    } else {
      res.status(404).send('Produto não encontrado!');
    }
  });

  routes.post("/products", async (req, res) => {

    // require the Joi module
    const Joi = require('joi');

    // fetch the request data
    const data = req.body;

    // define the validation schema
    const schema = Joi.object().keys({
      product_code: Joi.number().integer().required(),
      description: Joi.string().required(),
    });

    // validate the request data against the schema
    Joi.validate(data, schema, async (err, value) => {

      if (err) {
        // send a 400 error response if validation fails
        res.status(400).json({
          status: 'error',
          message: 'Formato inválido!',
          data: data
        });
      } else {
        // send a success response if validation passes
        // attach the random UID to the data response
        res.json({
          status: 'success',
          message: 'Produto cadastrado com sucesso!',
          data: data
        });
        res.send(await repo.save(req.body));
      };
    })
  })
})
  .catch(error => res.status(400).send(error.message));

module.exports = routes;