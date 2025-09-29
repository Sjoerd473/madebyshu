const replyModule = (body) => {
  const from = "Myself <no-reply@example.com>";
  const to = `info@madebyshu.net`;
  const subject = `New message from website`;

  {
        const html = `<p>Nome: ${body.firstName} ${body.lastName} </p>
    <p>Email: ${body.email}</p>
    <p>Pachetto: ${body.package}</p>
                <p>Message:</p>
                 <p> ${body.message}</p>`;


    return {
      from: from,
      to: to,
      subject: subject,
      text: "HTML failure",
      html: html,
    };
  }
};


module.exports = {
    replyModule
}