const nodemailer = require('nodemailer');
const config = require('../../config/config');



const EmailService = {
    sendTest(req, res) {
        let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: config.mail.user,
                pass: config.mail.password
            }
        });

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

    }
}

module.exports = EmailService;