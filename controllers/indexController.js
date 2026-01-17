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
    console.log("hello from logger")
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