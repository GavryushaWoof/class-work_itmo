const express = require('express');
const session = require('express-session');
let app = express();

app.use(session({
    secret: 'hjskjhsekjsg', //ключ тип просто потыкать по клаве
    name: 'Neko',
    cookie: {
        httpOnly: true, //нельзя обратиться с помощью document.cookie, более безопасно
        maxAge: 60000, //время жизни
    },
    resave: false,
    saveUninitialized: true,
}))

app.get('/', function(req, res, next) {
    if (req.session.view) {
        req.session.view++;
        res.setHeader('Content-Type', 'text/html');
        res.write('<p> Views: ' + req.session.view + '</p>');
        res.write('<p> Expires: ' + req.session.cookie.maxAge + 's</p>');
        res.write('<a href="/out">Out</a>');
        res.end();
    } else {
        req.session.view = 1;
        res.end('Welcome to the new session. ID: ' + req.session.id)
    }
});

app.get('/out', function(req, res, next) {
    if (req.session) {
        req.session.destroy();
    }
    res.redirect('/');
});

// app.use(function(req, res, next) {
//     let cookie = req.headers.cookie;
//     if (!cookie) {
//         res.writeHead(200, {
//             'Set-Cookie': 'id=Bakka; domain=localhost; path=/; max-age=60; httpOnly;'
//         });
//         res.end('Hello');
//     } else {
//         let arr = cookie.split("; ");
//         let obj = {};
//         for (let i = 0; i < arr.length; i++) {
//             let temp = arr[i].split('=');
//             obj[temp[0]] = temp[1];
//         }

//         if (obj["id"] == "Bakka") {
//             res.end('Normal!!');
//         } else {
//             console.log(cookie);
//             res.end('Exist cookie!!');
//         }
//     }
// });

app.listen(8080);