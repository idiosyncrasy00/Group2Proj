const nodemailer = require('nodemailer');
// require('dotenv').config({ path: ".env.local" });  // For testing only

var transporter = null;
const sender = "Ban tổ chức cuộc họp <danielfred@gmail.com>";

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
Kính gửi bạn ${fullname},<br>
<br>
Chúng tôi trân trọng kính mời bạn đến dự cuộc họp ${title} vào ngày ${date}.<br>
<br>
Cuộc họp sẽ diễn ra vào lúc ${startingtime} giờ tại ${roomname}, kéo dài trong ${during} tiếng. Nội dung cuộc họp là như sau:<br>
<br>
${content}<br>
<br>
Rất mong được sự có mặt của bạn tại buổi họp để cuộc họp diễn ra thành công tốt đẹp.<br>
<br>
Ban tổ chức cuộc họp,<br>
    Nhóm 2<br>
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
