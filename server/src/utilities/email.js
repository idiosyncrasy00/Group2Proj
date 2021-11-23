const nodemailer = require('nodemailer');
// require('dotenv').config({ path: ".env.local" });  // For testing only

var transporter = null;
const sender = "Daniel Fred <danielfred@gmail.com>";

// Init mailer
function init_mailer() {
    console.log("Init mailer ...");
    transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
            type: "OAuth2",
            user: process.env.NODEMAILER_USER,
            clientId: process.env.NODEMAILER_CLIENTID,
            clientSecret: process.env.NODEMAILER_CLIENTSECRET,
            refreshToken: process.env.NODEMAILER_REFRESHTOKEN,
            accessToken: process.env.NODEMAILER_ACCESSTOKEN
        }
    });
}

function send_email(receiver, subject="Empty", html="Empty") {
    transporter.sendMail({
        from: sender,
        to: receiver,
        subject: subject,
        html: html
    }, (error, s) => {
        if (error) {
            console.log("Cannot sent email. Credential invalid");
        } else {
            console.log("Email sent");
        }
    });
}


module.exports = { init_mailer, send_email };
