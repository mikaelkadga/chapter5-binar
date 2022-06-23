const express = require("express");
const { getProducts } = require("./products/products.service");
const { getUsers } = require("./users/users.service");
const app = express();
const port = 3000;


//domain user management (users)
app.get('/users', getUsers)

//domain product management (products)
app.get('/products', getProducts)

app.listen(port, () =>
  console.log(`example app listening at http://localhost:${port}`)
);