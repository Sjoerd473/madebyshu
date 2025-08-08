const express = require("express");
const app = express();
require("dotenv").config();
const path = require("node:path");
const assetsPath = path.join(__dirname, "public");

const indexRouter = require('./routes/indexRouter')
const codeRouter = require('./routes/codeRouter')

// app.use(express.static("public", {
//   setHeaders: (res, path) => {
//     res.setHeader("Cross-Origin-Opener-Policy", "same-origin");
//     res.setHeader("Cross-Origin-Embedder-Policy", "require-corp");
//   }
// }));

// app.use(express.static('public', {
//   maxAge: '7d',
//   etag: true,
// }));

// app.use(function (req, res, next) {
//   res.setHeader(
//     'Content-Security-Policy',
//     "default-src 'self'; font-src 'self' https://fonts.gstatic.com; img-src 'self'; script-src 'self' 'unsafe-eval'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; frame-src 'self'"
//   );
//   next();
// });

// app.use(function(req, res, next) {
//   if (req.secure) {
//     res.setHeader('Strict-Transport-Security', 'max-age=31536000; includeSubDomains; preload');
//   }
// next();
// })

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.static(assetsPath));
app.use(express.urlencoded({ extended: true }));

app.use('/webdev', codeRouter);
app.use('/', indexRouter);



app.listen(process.env.PORT, () => {
  console.log(`Listening on port ${process.env.PORT}`);
});
