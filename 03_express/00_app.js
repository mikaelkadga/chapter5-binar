const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  console.log(req.url);
  console.log(req.headers);
  res.send("hello");
});
app.post("/", (req, res) => res.send("hello"));
app.put("/", (req, res) => res.send("hello"));
app.delete("/", (req, res) => res.send("hello"));

app.get("/products", (req, res) => {
  const products = [
    {
      name: "product 1",
      price: 2000,
    },
    {
      name: "product 2",
      price: 4000,
    },
  ];
  res.json(products);
});

app.get("/products/:productId", (req, res) => {
  console.log(req.params);
  return res.send(`your product id: ${req.params.productId}`);
});

app.listen(port, () =>
  console.log(`example app listening at http://localhost:${port}`)
);
