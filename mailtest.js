require('dotenv').config();
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.MAIL,
    pass: process.env.MAILPASS,
  },
});

transporter.sendMail({
  from: process.env.MAIL,
  to: 'info@madebyshu.net',
  subject: 'Test Email from VPS',
  text: 'This is a test.',
}, (err, info) => {
  if (err) {
    console.error('Failed:', err);
  } else {
    console.log('Success:', info.response);
  }
});