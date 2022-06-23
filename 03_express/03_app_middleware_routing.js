const express = require("express");
const morgan = require("morgan");
const productsRouter = require("./products/products.route");
const usersRouter = require("./users/users.route");
const app = express();
const port = 3000;


app.use(morgan('tiny'))
app.use(usersRouter)
app.use(productsRouter)

app.listen(port, () =>
  console.log(`example app listening at http://localhost:${port}`)
);