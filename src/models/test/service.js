'use strict';
const models = require('./../../models');
const model = models['Test'];

const nodemailer = require('nodemailer');

const TestService = {

    getAll: () => {
        console.log('dududu');
        return model.findAll({});

    },

    sendler: (to, subject, text) => {

        let transporter = nodemailer.createTransport({

            service: 'gmail',
            secure: false,
            port: 25,
            auth: {
                user: 'poalex987@gmail.com',
                pass: 'MISTmare678'
            },
            tls: {
                rejectUnauthorized: false
            }
        });

        let HelperOptions = {
            from: 'poalex987@gmail.com',
            to: to,
            subject: subject,
            text: text
        };

        transporter.sendMail(HelperOptions, (error, info) => {
            if(error){
                return console.log('error bla bla bla' + error);
            }
            console.log("The message was sent!");
            console.log(info);
        });
    }
};









module.exports = TestService;