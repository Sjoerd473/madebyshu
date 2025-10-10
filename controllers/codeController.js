const db = require("../db/queries");
const { body, validationResult } = require("express-validator");
const axios = require('axios');

const nodemailer = require("nodemailer");
const mail = require('../services/mail.js')


let transporter;

async function mailSetter() {

transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.MAIL,
    pass: process.env.MAILPASS,
  },
  secure: false,
  tls: {
    rejectUnauthorized: false,
  },
});

}
mailSetter()

const validateModule = [
  body("firstName")
    .trim()
    .notEmpty()
    .isLength({ min: 2, max: 30 })
    .withMessage("First name must be between 2 and 30 characters")
    .matches(/^[a-zA-ZÀ-ÿ\s'-]+$/)
    .withMessage("First name contains invalid characters")
    .escape(),

  body("lastName")
    .trim()
    .notEmpty()
    .isLength({ min: 2, max: 30 })
    .withMessage("Last name must be between 2 and 30 characters")
    .matches(/^[a-zA-ZÀ-ÿ\s'-]+$/)
    .withMessage("Last name contains invalid characters")
    .escape(),

    body("email")
        .trim()
        .isEmail()
        .withMessage(`Email address invalid`)
        .normalizeEmail(),
  body("message")
    .trim()
    .escape()
    .isLength({ min: 10, max: 1000 })
    .withMessage("Message must be between 10 and 1000 characters")
    .matches(/^[^<>]*$/)
    .withMessage("Message cannot contain angle brackets or HTML tags"),
];

indexGet = async (req, res) => {

  res.render("indexCode", {
    title: "Made By Shu - Web Developement",
    nonce: res.locals.nonce
  });
};


formGet = async (req, res) => {
   
    res.render('./partials/modalform.ejs')
}

// formPost = [validateModule, async (req, res, next) => {

//      const token = req.body['cf-turnstile-response'];

//   if (!token) {
//     return res.status(400).send('No Turnstile token provided');
//   }

//   try {
//     const response = await axios.post(
//       'https://challenges.cloudflare.com/turnstile/v0/siteverify',
//       new URLSearchParams({
//         secret: TURNSTILE_SECRET_KEY,
//         response: token,
//         remoteip: req.ip,
//       }).toString(),
//       {
//         headers: {
//           'Content-Type': 'application/x-www-form-urlencoded',
//         },
//       }
//     );

//     if (response.data.success) {
//       res.send('Turnstile verification passed ✅');
//     } else {
//       res.status(403).send('Turnstile verification failed ❌');
//     }
//   } catch (error) {
//     console.error('Verification error:', error);
//     res.status(500).send('Internal server error');
//   }


//     const errors = validationResult(req);
//     if (!errors.isEmpty()) {
//         console.log(errors.array());

//         return res.render("./partials/modalerror", {
//             errors: errors.array()
//         });
//     }
//     db.postModule(req.body);

   
//     transporter
//         .sendMail(mail.replyModule(req.body))
        
//         .catch(console.error);
    
//     res.render("./partials/formResponse")
// },
// ];

const formPost = [
  validateModule,
  async (req, res, next) => {
    const token = req.body['cf-turnstile-response'];

    if (!token) {
      return res.status(400).send('No Turnstile token provided');
    }

    try {
      const response = await axios.post(
        'https://challenges.cloudflare.com/turnstile/v0/siteverify',
        new URLSearchParams({
          secret: process.env.SECRET_KEY,
          response: token,
          remoteip: req.ip,
        }).toString(),
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        }
      );

      if (!response.data.success) {
        return res.status(403).send('Turnstile verification failed ❌');
      }
    } catch (error) {
      console.error('Verification error:', error);
      return res.status(500).send('Internal server error');
    }

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      console.log(errors.array());
      return res.render('./partials/modalerror', {
        errors: errors.array(),
      });
    }

    try {
      
      await db.postModule(req.body);

      await transporter.sendMail(mail.replyModule(req.body));

      res.render('./partials/formResponse');
    } catch (err) {
      console.error('Processing error:', err);
      res.status(500).send('Failed to process form');
    }
  },
];












module.exports = {
    indexGet,
    formGet,
  formPost,
};
