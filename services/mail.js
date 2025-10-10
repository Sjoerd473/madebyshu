const replyModule = (body) => {
  const from = 'info@madebyshu.net'; // must be verified in Resend
  const to = 'fattodashu@gmail.com';
  const subject = 'New message from website';

  const html = `
    <p>Nome: ${body.firstName} ${body.lastName}</p>
    <p>Email: ${body.email}</p>
    <p>Pachetto: ${body.package}</p>
    <p>Message:</p>
    <p>${body.message}</p>
  `;

  return {
    from,
    to,
    subject,
    text: 'HTML fallback',
    html,
  };
};

module.exports = { replyModule };
