let express = require('express');
let routes = require('./src/routes');

// Create our app
let app = express();
const PORT = process.env.PORT || 3000;

app.use(function (req, res, next){
    if (req.headers['x-forwarded-proto'] === 'https') {
        res.redirect('http://' + req.hostname + req.url);
    } else {
        next();
    }
});

app.use(express.static('public'));

app.use('/', routes);


app.listen(PORT, function () {
    console.log('Express server is up on port ' + PORT);
});
