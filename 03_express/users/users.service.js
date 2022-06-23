const userCollection = [];

const getUsers = (req, res) => {
    res.json(userCollection.length === 0 ? 'user empty' : userCollection);
    // res.send("userCollection");
}

const getUser = (req, res) => {
    // res.json(userCollection.length === 0 ? 'user empty' : userCollection);
    console.log(req.params)
    res.send(`get user by id: ${req.params.userId}`);
}

const createUser = (req, res) => {
    // res.json(userCollection.length === 0 ? 'user empty' : userCollection);
    res.send("create user");
}

const editUser = (req, res) => {
    // res.json(userCollection.length === 0 ? 'user empty' : userCollection);
    res.send(`edit user by id: ${req.params.userId}`);
}

const deleteUser = (req, res) => {
    // res.json(userCollection.length === 0 ? 'user empty' : userCollection);
    res.send(`delete user by id: ${req.params.userId}`);
}


module.exports = { getUsers, getUser, createUser, editUser, deleteUser }