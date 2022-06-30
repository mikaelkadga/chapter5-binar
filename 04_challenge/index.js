const express = require('express');
const morgan = require('morgan');
const authRouter = require('./auth/auth.router');
const app = express();
const port = 3000;

//body-parser library
const bodyParser = require('body-parser'); 
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//css, js file
app.use(express.static(__dirname + "/public/home"));
app.use(express.static(__dirname + "/public/game"));

//set view engine
app.set("view engine", "html");
app.engine("html", require("ejs").renderFile);

//morgan, logger middleware
app.use(morgan("tiny"));

//login auth
app.use(authRouter);

//home page
app.get('/', (req, res) => {
    return res.render("home/index");
})

//game page
app.get('/game', (req, res) => {
    return res.render("game/index");
})



app.listen(port, () => console.log(`example app listening at http://localhost:${port}`))