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
            console.log("Email recorded but not sent. Credential invalid");
        } else {
            console.log("Email sent");
        }
    });
}

function send_invite_email(receiver, fullname, roomname, date, startingtime, during, title, content) {
    let subject = `${title} Meeting on ${date}`;
    let html = 
`<body>
Hello ${fullname},<br>
<br>
I hope this email finds you well. I’m writing to invite you to a meeting on ${date} to discuss about ${title}.<br>
<br>
The meeting will take place at ${roomname} on ${startingtime}:00 and will last approximately ${during} hours. An agenda for the meeting is attached. The most important topics for discussion include:<br>
<br>
${content}<br>
<br>
Please click this link to confirm whether or not you will be able to attend so we can plan effectively.<br>
https://bit.ly/3rjF634<br>
<br>
Regard,<br>
<br>
Daniel Fred<br>
<span style="opacity: 0"> ${Date.now()} </span>
</body>`;
    // console.log('>>>>>>>');
    // console.log(subject);
    // console.log('>>>>>>>');
    // console.log(html);
    // console.log('>>>>>>>');
    send_email(receiver, subject, html);
}

module.exports = { init_mailer, send_email, send_invite_email };
