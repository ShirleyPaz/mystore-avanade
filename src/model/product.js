/*export */ class Product {
    constructor(id, code, desc) {
        this.product_uid = id;
        this.product_code = code;
        this.description = desc;
    }
}

module.exports = {
    Product: Product
};

