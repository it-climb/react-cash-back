const nodemailer = require('nodemailer');
const config = require('../../config/config');


const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: config.mail.user,
        pass: config.mail.password
    }
});

let random, link, host, mailOptions;


const EmailService = {
    sendTest(req, res) {

        let mailOptions = {
            from: '"Fred Foo 👻" <foo@blurdybloop.com>', // sender address
            to: req.body.receivers, // list of receivers
            subject: req.body.subject, // Subject line
            text: req.body.text, // plain text body
            html: '<b>Hello world!</b>' // html body
        };

        // send mail with defined transport object
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                return console.log(error);
            }
            console.log('Message %s sent: %s', info.messageId, info.response);
        });

    },
    sendEmail(req, res) {

        random = Math.floor((Math.random() * 100) + 54);
        host = req.get('host');
        link = "http://"+host+"/email/verify?id="+random;

        console.log(link, req.query);

        mailOptions = {
            from: '"Fred Foo 👻" <foo@blurdybloop.com>',
            to : req.body.receivers,
            subject : "Please confirm your Email account",
            html : "Hello,<br> Please Click on the link to verify your email.<br><a href="+link+">Click here to verify</a>"
        };

        console.log(mailOptions);

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.log(error);
                res.end("error");
            } else {
                console.log("Message sent: " + info);
                res.end("sent");
            }
        })
    },
    verifyEmail(req, res) {

        console.log(req.protocol+"://"+req.get('host'));

        if((req.protocol+"://"+req.get('host'))==("http://"+host))
        {
            console.log("Domain is matched. Information is from Authentic email");
            if(req.query.id==random)
            {
                console.log("email is verified");
                res.end("<h1>Email "+mailOptions.to+" is been Successfully verified");
            }
            else
            {
                console.log("email is not verified");
                res.end("<h1>Bad Request</h1>");
            }
        }
        else
        {
            res.end("<h1>Request is from unknown source");
        }
    }
}


module.exports = EmailService;