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



// const nodemailer = require('nodemailer');
//
// // create reusable transporter object using the default SMTP transport
// let transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//         user: 'spalahadvanced@gmail.com',
//         pass: 'spalahadvanced1'
//     }
// });
//
// // setup email data with unicode symbols
// let mailOptions = {
//     from: '"Fred Foo 👻" <foo@blurdybloop.com>', // sender address
//     to: 'tester@mailinator.com', // list of receivers
//     subject: 'Hello ✔', // Subject line
//     text: 'Hello world ?', // plain text body
//     html: '<b>Hello world ?</b>' // html body
// };
//
// // send mail with defined transport object
// transporter.sendMail(mailOptions, (error, info) => {
//     if (error) {
//         return console.log(error);
//     }
//     console.log('Message %s sent: %s', info.messageId, info.response);
// });