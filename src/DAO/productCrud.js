const productModel = require('../model/product');

class ProductCrud {

  constructor() {
    this.model = new productModel();
  }
    get() {
      let productsRepository = connection.getRepository(Product);
      return productsRepository.find();
    }
  
    post(item) {
      let productsRepository = connection.getRepository(Product);
      return productsRepository.save(item);
    }
  }
  
  module.exports = productCrud;

