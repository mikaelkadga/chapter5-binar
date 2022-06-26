const express = require('express')
const { getUsers, getUser, createUser, editUser, deleteUser } = require('./users.service')
const usersRouter = express.Router()

//get users
usersRouter.get('/users', getUsers)

//create user
usersRouter.post('/users', createUser)

//get user by id
usersRouter.get('/users/:userId', getUser)

//update user
usersRouter.put('/users/:userId', editUser)

//delete user
usersRouter.delete('/users/:userId', deleteUser)

module.exports = usersRouter
