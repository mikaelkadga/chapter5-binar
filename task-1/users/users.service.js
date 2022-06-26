const userList = [
    {
        id: 1,
        username: "will",
        password: "123"
    },
    {
        id: 2,
        username: "justin",
        password: "123456"
    }  
];


//get all user
const getUsers = (req, res) => {
    res.json(userList.length === 0 ? 'user empty' : userList);
}

//create new user
const createUser = (req, res) => {
    // there is no database
    const userName = req.body["username"];
    const password =  req.body["password"];
    const userId = userList[userList.length - 1].id + 1;
    userList.push({"id": userId, "username" : userName, "password": password});
    res.json(userList)
}

//get user by specific id
const getUser = (req, res) => {
    const {userId} = req.params

    res.json( 
        userList.filter(user => {
            return user.id == userId
        })
    )
}

//edit user data by specific id
const editUser = (req, res) => {
    const {userId} = req.params;

    const selectedUser = userList.find(user => user.id == userId);
    selectedUser.username = req.body["username"];
    selectedUser.password = req.body["password"];

    res.json(selectedUser);
}

//delete user by specific id
const deleteUser = (req, res) => {
    const {userId} = req.params;

    const selectedUser = userList.find(user => user.id == userId);
    const indexSelectedUser = userList.findIndex(user => user.id == selectedUser.id);
    userList.splice(indexSelectedUser, 1);
    return res.send(userList);
}


module.exports = { getUsers, getUser, createUser, editUser, deleteUser }
