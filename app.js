const express = require("express");
const app = express();
const helmet = require('helmet');
require("dotenv").config();
const path = require("node:path");
const assetsPath = path.join(__dirname, "public");
const crypto = require('crypto');
app.use(helmet({
  contentSecurityPolicy: false
}));
app.enable('trust proxy');



const indexRouter = require('./routes/indexRouter')
const codeRouter = require('./routes/codeRouter')

app.use(express.static("public", {
  setHeaders: (res, path) => {
    res.setHeader("Cross-Origin-Opener-Policy", "same-origin");
    res.setHeader("Cross-Origin-Embedder-Policy", "require-corp");
  }
}));

app.use(express.static('public', {
  maxAge: '7d',
  etag: true,
}));


app.use((req, res, next) => {

  res.setHeader('X-Frame-Options', 'SAMEORIGIN');
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
  res.setHeader('Permissions-Policy', 'camera=(), microphone=(), geolocation=()');
  next();
});


app.use((req, res, next) => {
  const nonce = crypto.randomBytes(16).toString('base64');
  res.locals.nonce = nonce;

const cspDirectives = [
  `default-src 'self';`,
  `script-src 'self' 'nonce-${nonce}' https://cdn.jsdelivr.net https://challenges.cloudflare.com;`,
  `style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;`,
  `font-src 'self' https://fonts.gstatic.com;`,
  `img-src 'self' data:;`,
  `frame-src https://challenges.cloudflare.com;`,
  `connect-src 'self' https://challenges.cloudflare.com https://api.cloudflare.com;`
  ];
  

 



const csp = cspDirectives.join(' ');
res.setHeader('Content-Security-Policy', csp);

 
  next();
});




app.use(function(req, res, next) {
  if (req.secure) {
    res.setHeader('Strict-Transport-Security', 'max-age=31536000; includeSubDomains; preload');
  }
next();
})

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use('/webdev', codeRouter);
app.use('/', indexRouter);

app.use(express.static(assetsPath));
app.use(express.urlencoded({ extended: true }));





  app.listen(process.env.PORT, () => {
    console.log(`Listening on port ${process.env.PORT}`);
  });
