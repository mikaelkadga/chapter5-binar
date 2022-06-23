const http = require('http')
const port = 3000

const handleRequest= (req, res) => {
    // if (req.method === "POST") {
    //     return res.end('post')
    // }
    // if (req.method === "GET") {
    //     return res.end('get')
    // }
    // if (req.method === "PUT") {
    //     return res.end('put')
    // }
    // if (req.method === "DELETE") {
    //     // response.writeHead(400)  
    //     return res.end('delete')
    // }

    // return res.end('method tidak diketahui')

    const dataSiswa = {
        name: 'Enrico',
        age: '23'
    }

    res.writeHead(200, {"Content-Type": "application/json"});
    return res.end(JSON.stringify(dataSiswa));
}

http.createServer(handleRequest).listen(port)