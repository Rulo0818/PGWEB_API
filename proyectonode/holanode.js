const  http= require('http');
const port = 8080;
const server = http.createServer(
    (req,res) =>{
        res.writeHead(200,{'Content-type': 'text/plain'});
        res.end('hola mundo\n');
});

server.listen(port, () =>{
    console.log(`Server is running on http://localhost:${port}`);
});

//lista de los codigos http mas comunes

