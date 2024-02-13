var http = require('http');
var fs = require('fs');
var url = require('url');

http.createServer(function(request, response) {
    var link = url.parse(request.url, true);
    var filename = "." + link.pathname;
    if (link.pathname === '/link.json') {
        fs.readFile(filename, function(err, contents) {
            if (err) {
                response.writeHead(404, { 'Content-Type': 'text/html' });
                return response.end("404 Not Found");
            }
            response.writeHead(200);
            response.write(contents);
            response.end();
        });
    }
    fs.readFile('index.html', function(err, contents) {
        if (err) {
            response.writeHead(404, { 'Content-Type': 'text/html' });
            return response.end("404 Not Found");
        }
        response.writeHead(200);
        response.write(contents);
        response.end();
    });
}).listen(8081);