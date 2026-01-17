// const db = require("../db/queries")
const path = require("path");
const fs = require("fs");




privacyGet = async (req, res) => {
    
    res.render('privacy', {title: 'Made by Shu - Privacy'})
}
cookieGet = async (req, res) => {
    
    res.render('cookies', {title: 'Made by Shu - Cookies'})
}
privacyEnGet = async (req, res) => {
    
    res.render('privacyEn', {title: 'Made by Shu - Privacy'})
}
cookieEnGet = async (req, res) => {
    
    res.render('cookiesEn', {title: 'Made by Shu - Cookies'})
}

loggerGet = async (req, res) => {
    const downloadsDir = path.join(__dirname, '..', "public", "Downloads", )
    const files = fs.readdirSync(downloadsDir);

// Find the first file that starts with "logger"
    const fileName = files.find(f => f.startsWith("logger"));

    if (!fileName) {
        return res.status(404).send("No logger file found");
    }

    const filePath = path.join(downloadsDir, fileName);

    console.log(filePath);
    console.log(fileName);

    res.download(filePath, fileName);
};



router.get('/:id/download', function (req, res, next) {
    var filePath = "/my/file/path/..."; // Or format the path using the `id` rest param
    var fileName = "report.pdf"; // The default name the browser will use

    res.download(filePath, fileName);    
});


indexGet = async (req, res) => {
  
    
    res.redirect('/webdev')
}
indexEnGet = async (req, res) => {
  
    
    res.redirect('en/webdev')
}

module.exports = {
    privacyGet,
    privacyEnGet,
    cookieGet,
    cookieEnGet,
    indexGet,
    indexEnGet,
    loggerGet
}