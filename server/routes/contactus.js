const express = require("express");
var nodemailer = require("nodemailer");
const router = express.Router();

router.post("/", async (req, res) => {
  if (!(req.body.name && req.body.email && req.body.message)) {
    return res.send("Enter all Fields").status(400);
  }
  console.log(req.body.email, req.body.name, req.body.message);
  sendEmail(req.body.name, req.body.email, req.body.message);
  res.send("Email sent").status(200);
});

function sendEmail(name, email, message) {
  console.log(email);
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "helloworldtechclan@gmail.com",
      pass: "helloworld123",
    },
  });

  const mailOptions = {
    from: `${email}`,
    to: "saadawais122@gmail.com",
    subject: `${name}`,
    text: `${message}`,
    replyTo: `${email}`,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
}
module.exports = router;
