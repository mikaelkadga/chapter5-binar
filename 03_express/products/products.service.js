const productCollection = []

const getProducts = (req, res) => {
    res.json(productCollection.length === 0 ? 'user empty' : productCollection)
    // res.send("productCollection");
}

const getProduct = (req, res) => {
    // res.json(productCollection.length === 0 ? 'product empty' : productCollection);
    console.log(req.params)
    res.send(`get product by id: ${req.params.productId}`);
}

const createProduct = (req, res) => {
    // res.json(productCollection.length === 0 ? 'product empty' : productCollection);
    res.send("create product");
}

const editProduct = (req, res) => {
    // res.json(productCollection.length === 0 ? 'product empty' : productCollection);
    res.send(`edit product by id: ${req.params.productId}`);
}

const deleteProduct = (req, res) => {
    // res.json(productCollection.length === 0 ? 'product empty' : productCollection);
    res.send(`delete product by id: ${req.params.productId}`);
}


module.exports = { getProducts, getProduct, createProduct, editProduct, deleteProduct }
