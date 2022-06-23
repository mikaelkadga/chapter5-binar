const express = require("express");
const { getProducts, getProduct, createProduct, editProduct, deleteProduct } = require("./products.service");
const productsRouter = express.Router();

//get products
productsRouter.get('/products', getProducts)

//get product by id
productsRouter.get('/products/:productId', getProduct);

//create product
productsRouter.post('/products', createProduct);

//edit product
productsRouter.put('/products/:productId', editProduct);

//delete product
productsRouter.delete('/products/:productId', deleteProduct);


module.exports = productsRouter