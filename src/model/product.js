/*export */ class Product {
    constructor(id, code, desc) {
        this.uid = id;
        this.code = code;
        this.description = desc;
    }
}

module.exports = {
    Product: Product
};

