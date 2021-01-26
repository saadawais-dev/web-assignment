const express = require("express");
var nodemailer = require("nodemailer");
const router = express.Router();

router.post("/", async (req, res) => {
  if (!(req.body.name && req.body.email && req.body.message)) {
    return res.send("Enter all Fields").status(400);
  }

  sendEmail(req.body.name, req.body.email, req.body.message)
    .then((result) => {
      res.send("Email sent").status(200);
    })
    .catch((err) => {
      res.send(err.message).status(400);
    });
});

async function sendEmail(name, email, message) {
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "helloworldtechclan@gmail.com",
      pass: "helloworld123",
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: `${email}`,
    to: "saadawais122@gmail.com",
    subject: `${name}`,
    text: `${message}`,
    replyTo: `${email}`,
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}

// function sendEmail(name, email, message) {
//   console.log(email);
//   const transporter =  nodemailer.createTransport({
//     service: "gmail",
//     auth: {
//       user: "helloworldtechclan@gmail.com",
//       pass: "helloworld123",
//     },
//   });

//   const mailOptions = {
//     from: `${email}`,
//     to: "saadawais122@gmail.com",
//     subject: `${name}`,
//     text: `${message}`,
//     replyTo: `${email}`,
//   };

//   transporter.sendMail(mailOptions, function (error, info) {
//     if (error) {
//       console.log(error);
//     } else {
//       console.log("Email sent: " + info.response);
//     }
//   });
// }
module.exports = router;
