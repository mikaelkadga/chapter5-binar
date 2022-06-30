const users = [
    {
        username: "user",
        password: "pass"
    }
];

const authLogin = (req, res) => {
    const {username, password} = req.body;

    const selectedUser = users.find(
        (user) => user.username == username && user.password == password
    );

    if (selectedUser) {
    res.status(200).json({ 
        status: 200, 
        message: "Login success!"
    });
    } else {
    res.status(400).json({
        status: 400,
        message:"Login failed!",
    });
    }
    
    // console.log({username, password});
    
}

module.exports = authLogin;