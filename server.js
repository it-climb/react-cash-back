const express = require('express'),
      routes = require('./src/routes'),
      bodyParser = require('body-parser');

// Create our app
const app = express();
const PORT = process.env.PORT || 3000;

app.use(function (req, res, next){
    if (req.headers['x-forwarded-proto'] === 'https') {
        res.redirect('http://' + req.hostname + req.url);
    } else {
        next();
    }
});

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use(express.static('dist'));

app.use(routes);

app.listen(PORT, function () {
    console.log('Express server is up on port ' + PORT);
});