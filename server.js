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
    var q = url.parse(req.url, true);
    console.log(req.url);
    var result = dt.calc(Number.parseInt(q.query.a), Number.parseInt(q.query.b),q.query.p);
    switch(req.url){
        case "/calculate": 
        res.writeHead(200);
        res.end(htmlfileread);
        break;
        default:
            res.end(`<!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Simple Calculate Web</title>
            </head>
            <body>
                <h1>Welcome To A Simple Calculator !!!</h1>
                <h3>Please! Input value for a, b and p</h3>
                <form method="GET" action="https://${hostname}/">
                    <br>
                    <label for="value-a">a: </label>
                    <input type="text" id="value-a" name="a" value=""/>
                    <br><br>
                    <label for="value-b">b: </label> 
                    <input type="text" id="value-b" name="b" value=""/>
                    <br><br>
                    <label for="value-p">p: </label> 
                    <input type="text" id="value-p" name="p" value=""/>
                    <br><br>
                    <input type="submit" value="Calculate Now" onclick="formdata()"/><br>
                    </form>
                    <form>
                        <label for="value-result">Result: </label>
                        <input type="text" id="value-result" value="${result}"/>
                    </form>
            </body>
            </html>`);
            break;
    }
})

// Using Module
const dt = require('./module');

// Server Listen
server.listen(port, () => {
    console.log(`Server running at https://${hostname}:${port}/`)
})