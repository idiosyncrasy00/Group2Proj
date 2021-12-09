const nodemailer = require('nodemailer');

var transporter = null;
const sender = "Ban tổ chức cuộc họp <danielfred@gmail.com>";
const dev_email = process.env.DEV_EMAIL || "randomemail@gmail.com";

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
    if (transporter != null) {
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
}

function send_invite_email(receiver, fullname, roomname, date, startingtime, during, title, content) {
    let yyyy = date.substr(0, 4);
    let mm = date.substr(5, 2);
    let dd = date.substr(8, 2);
    let subject = `Thông báo cuộc họp ${title} vào ngày ${dd} tháng ${mm} năm ${yyyy}`;
    let html = 
`<body>
Kính gửi bạn ${fullname},<br>
<br>
Chúng tôi trân trọng kính mời bạn đến dự cuộc họp ${title} vào ngày ${dd} tháng ${mm} năm ${yyyy}.<br>
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
    send_email(receiver, subject, html);
}

function send_feedback_email(id, userid, message) {
    let subject = `Phản hồi ứng dụng số ${id}`;
    let html = 
`<body>
ID phản hồi: ${id}<br>
ID người phản hồi: ${userid}<br>
Tin nhắn:<br>
${message}
</body>`
    send_email(dev_email, subject, html);
}

module.exports = { init_mailer, send_email, send_invite_email, send_feedback_email };
