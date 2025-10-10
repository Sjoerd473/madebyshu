require('dotenv').config();
const { Resend } = require('resend');

const resend = new Resend(process.env.RESEND_KEY);

async function sendTestEmail() {
  try {
    const response = await resend.emails.send({
      from: 'infoy@madebyshu.net', // must be a verified domain sender
      to: 'fattodashu@gmail.com',
      subject: 'Test Email from VPS',
      text: 'This is a test.',
    });

    console.log('Success:', response);
  } catch (err) {
    console.error('Failed:', err);
  }
}

sendTestEmail();