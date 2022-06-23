const express = require("express");
const morgan = require("morgan");
const { getProducts, getProduct, createProduct, editProduct, deleteProduct } = require("./products/products.service");
const { getUsers, getUser, createUser, editUser, deleteUser } = require("./users/users.service");
const app = express();
const port = 3000;

//middleware buat logging
//jadi middleware ini fungsinya bisa buat ngecek akses siapa aja yang boleh akses ke api tertentu
//bisa juga jadi logger (sesuai nama middlewarenya juga sih, jadi bisa buat middleware macem-macem)
//ini ada fungsi jadi kalo gak ngirim secret-key gak bisa akses
// const logger = (req, res, next) => {
//     const kunci = req.headers['x-secret-key'];

//     if(kunci !== 'katarahasia') {
//         console.log(req.headers)
//         return res.status(400).send('you are not authorized!')
//     }

//     next();
// }

//panggil middleware logger global
//nah bisa juga kalo mau manggil logger di api tertentu aja jadi gak global, manggilnya antara path dan req, res
// app.use(logger)

//bisa juga pake middleware 3rd party namanya morgan
app.use(morgan('tiny'))

//index
app.get('/', (req,res) => {
    return res.send('index page')
});

//domain user management (users)
app.get('/users', getUsers);
app.get('/users/:userId', getUser);
app.post('/users', createUser);
app.put('/users/:userId', editUser);
app.delete('/users/:userId', deleteUser);

//domain product management (products)
app.get('/products', getProducts)
app.get('/products/:productId', getProduct);
app.post('/products', createProduct);
app.put('/products/:productId', editProduct);
app.delete('/products/:productId', deleteProduct);

app.listen(port, () =>
  console.log(`example app listening at http://localhost:${port}`)
);