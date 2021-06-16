const hostname = 'simplecalculateapp.herokuapp.com';
const port = process.env.PORT || 80;
const http = require('http');
const url = require('url');
const fs = require('fs');

// Read File 
fs.readFile('./simplecalculate.html', (err, data) => {
    if(err){
        return console.log('Error Occurred while reading file');
    }
    console.log(data.toString());
    htmlfileread = data.toString();
});

// Connect To Server And Read HTML Content
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type","text/html ")

    switch(req.url){
        case "/": 
        res.end(`<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Simple Calculate Web</title>
        </head>
        <body>
            <h1 style="text-align: center;">Home Page</h1>
            <p style="text-align: center;"><a href="/calculate">Calculate NOW !!!</a></p>
        </body>
        </html>`);
        break;
        default:
            res.writeHead(200);
            res.end(htmlfileread);
            break;
    }
})

// Using Module
const dt = require('./module');

// Server Listen
server.listen(port, () => {
    console.log(`Server running at https://${hostname}:${port}/`)
})