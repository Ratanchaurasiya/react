
var http = require('http');
let fs = require('fs');
http.createServer(function (request, response) {
    fs.readFile('./login.html', 'utf-8', (error, data) => {//readFile is a asynchronous function.
        if (error) {//read ia a synchronous function.
            console.error(error);
            response.writeHead(404);//,{ 'Content-Type': 'text/plain' });
            response.end('File not found');
            return;
        }
        else{
            response.writeHead(200, { 'Content-Type': 'text/html' });
            if(request.url === '/Index'){
                fs.readFile('./index.html', 'utf-8', (error, data) => {
                    if (error) {
                        console.error(error);
                        response.writeHead(404);//,{ 'Content-Type': 'text/plain' });
                        response.end('File not found');
                        return;
                    }
                    response.write(data);
                });
            } else {
                response.write(data);
            }
        }
        response.end();
    });
}).listen(3000);
// http.createServer(function (req, res) {
//     res.write('<h1>Our Program is running on port 3000</h1>');
//     res.end();
// }).listen(3000)