const express = require("express");
const { getUsers, getUser, createUser, editUser, deleteUser } = require("./users.service");
const usersRouter = express.Router();

//get users
usersRouter.get('/users', getUsers);

//get user by id
usersRouter.get('/users/:userId', getUser);

//create user
usersRouter.post('/users', createUser);

//edit user
usersRouter.put('/users/:userId', editUser);

//delete user
usersRouter.delete('/users/:userId', deleteUser);

module.exports = usersRouter