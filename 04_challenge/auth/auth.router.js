const express = require('express');
const authLogin = require('./auth.service');
const authRouter = express.Router();

authRouter.post('/auth', authLogin)

module.exports = authRouter;