const http = require('http');
const fs = require('fs');
const url = require('url');
const querystring = require('querystring');
http.createServer(function(req, res) {
    console.log(req.url);
    let obj = {}

    // let arr = req.url.split('?')[1].split('&');
    // console.log(arr);

    let urlObj = url.parse(req.url);
    console.log(urlObj);
    if (urlObj.query) {
        obj = querystring.parse(urlObj.query);
        console.log(obj);
    }
    if (obj.text1 || obj.test) {
        res.writeHead(200, {
            'Content-Type': 'text/plain; charset = uyf-8'
        });
        res.end("Спасибо все получил");
    }

    // console.log(urlObj.searchParams.get('text1'));
    // console.log(urlObj.searchParams.get('text2'));

    fs.readFile('index.html', "UTF-8", (err, data) => {
        if (err) {
            res.statusCode = 404;
            return res.end();
        } else {
            res.writeHead(200, {
                'Content-Type': 'text/plain'
            });
            res.end(data);
        };
    });

}).listen(8080);