var express = require('express');
let loadRoutesData = require('./src/routes.js');

// Create our app
var app = express();
const PORT = process.env.PORT || 3000;

app.use(function (req, res, next){
    if (req.headers['x-forwarded-proto'] === 'https') {
        res.redirect('http://' + req.hostname + req.url);
    } else {
        next();
    }
});

app.use(express.static('public'));

app.get('/tests', function(req, res){
    console.log("I'm working");
    res.send('Response send to client');
});

app.listen(PORT, function () {
    console.log('Express server is up on port ' + PORT);
});
