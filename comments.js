// Create a web server
var http = require('http');
var fs = require('fs');
var url = require('url');
var comments = [];
var server = http.createServer(function (request, response) {
    var parseObj = url.parse(request.url, true);
    var pathName = parseObj.pathname;
    if (pathName === '/') {
        fs.readFile('./index.html', function (err, data) {
            if (err) {
                return response.end('404 Not Found');
            }
            response.end(data);
        });
    }
});

