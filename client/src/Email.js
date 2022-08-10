const emails= ["ghi@hotmail.com", "def@yahoo.com", "ghi@gmail.com", "abc@channelier.com", "abc@hotmail.com","def@hotmail.com","abc@gmail.com", "abc@yahoo.com","def@channelier.com","jkl@hotmail.com","ghi@yahoo.com","def@gmail.com"];
emails.sort();
const  senderEmail="some@gmail.com";
const  senderPassword=123;

for(let email in emails){
    sendEmail(email, senderEmail,senderPassword);
}


function sendEmail(email, senderEmail,senderPassword){

var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: senderEmail,
    pass: senderPassword
  }
});

var mailOptions = {
  from:  senderEmail,
  to: email,
  subject: 'Welcome',
  text: 'Hello'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
}