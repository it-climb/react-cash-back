let express = require('express'),
    routes = require('./src/routes')

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

app.get('/tests', function(req, res){
    res.send('hello world');
});

app.listen(PORT, function () {
    console.log('Express server is up on port ' + PORT);
});

app.use('/api', require( './src/routes'));

