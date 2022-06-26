const express = require('express');
const morgan = require('morgan');
const usersRouter = require('./users/users.route');
const app = express();
const port = 3000;

//body-parser library
const bodyParser = require('body-parser'); 
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//logging middleware 
app.use(morgan('tiny'))

//routing users
app.use(usersRouter)

//index page
app.get('/' , (req , res)=>{
    res.send('hello')
 })

app.listen(port, () => {
    console.log(`example app listening at http://localhost:${port}`)
})