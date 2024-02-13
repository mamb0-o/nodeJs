let express = require('express');
let app = express();

let url = require('url');

let intro = {
    protocol: "http:",
    host: "localhost:8081",
    pathname: '/intro'
};

let introPath = url.format(intro);


app.get('/', function(req, res) {
    res.sendFile(__dirname + "/index.html");
    console.log(introPath);
});

app.get('/index.html', function(req, res) {
    res.sendFile(__dirname + "/index.html");
    console.log(introPath);
});

app.get('/intro.html', function(req, res) {
    res.sendFile(__dirname + "/intro.html");
});

app.get('/about.html', function(req, res) {
    res.sendFile(__dirname + "/about.html");
});

app.get('/list.html', function(req, res) {
    res.sendFile(__dirname + "/list.html");
});
app.listen(8081);