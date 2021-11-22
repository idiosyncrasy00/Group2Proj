const nodemailer = require('nodemailer');


const sender = '"Daniel Fred" <danielfred@tech.com>';
var account = null;
var transporter = null;

// Init mailer
async function init_mailer() {
    console.log("Init mailer ...");
    account = await nodemailer.createTestAccount();
    transporter = nodemailer.createTransport({
        name: "127.0.0.1",
        host: "smtp.ethereal.email",
        port: 587,
        secure: false,
        auth: {
            user: account.user,
            pass: account.pass
        }
    });
}

async function send_email(receiver, subject="Empty", text="Empty") {
    let info = await transporter.sendMail({
        from: sender,
        to: receiver,
        subject: subject,
        text: text
    });
    console.log("Message sent: ", info.messageId);
    console.log("Preview URL: ", nodemailer.getTestMessageUrl(info));
}


(async () => {
    await init_mailer();
    await send_email("gmxancrazy24114@gmail.com", "Test email", "Prometheous is here");
})();


module.exports = { send_email };
