const Products = require('../services/Products');


exports.getAllProducts = async (req,res) => { //get All Products
    const response = await Products.getAllProducts();
    res.send(response);
};

exports.getById = async (req,res) => { //getById Products
    const response = await Products.getById(req.params);
    res.send(response);
};

exports.getByDiscount = async (req,res) => { //getByDiscount Products
    const response = await Products.getByDiscount(req.params, req.body);
    console.log("geldi");
    res.send(response);
};

exports.createProduct = async (req,res) => { //create Product
    const response = await Products.add(req.body);
    console.log(response);
    res.send(response);
};

exports.updateProduct = async (req,res) => { //update Product
    const response = await Products.update(req.params,req.body);
    res.send(response);
};

exports.deleteProduct = async (req,res) => { //delete Product
    const response = await Products.delete(req.params);
    res.send(response);
};
