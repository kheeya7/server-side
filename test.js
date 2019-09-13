var http = require('http');
var fs = require('fs');
var heeyaModule = require('./heeyaModule');

var server = http.createServer((req, res) => {
    // fs.readFile('index.html', (err, data) => {
    //     res.writeHead(200, { 'Content-type': 'text/html' });
    //     res.write(data);
    //     res.end();
    // });
    res.writeHead(200, {
        'Content-type': 'text/plain',
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"
    });

    var url = req.url;
    var visitorName = url.substr(1);

    fs.readFile('data.json', (err, data) => {
        console.log(data);

        var visitors = JSON.parse(data);

        if (visitorName !== 'favicon.ico') {
            if (visitors[visitorName]) {
                visitors[visitorName] += 1;
            } else {
                visitors[visitorName] = 1;
            }
        }

        fs.writeFile('data.json', JSON.stringify(visitors), (errs) => { });

        res.end(JSON.stringify(visitors));
    });

    // var url = req.url;
    // var name = url.substr(1);

    // heeyaModule.recoreVisitor(name);

    // res.end('Hello World! ' + heeyaModule.showVisitors());
}).listen(8081);