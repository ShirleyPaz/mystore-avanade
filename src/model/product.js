/*export */ class Product {
    constructor(uid, code, desc) {
        this.product_uid = uid;
        this.product_code = code;
        this.description = desc;
    }    
}

module.exports = { Product }

