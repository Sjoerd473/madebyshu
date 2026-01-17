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

loggerGet= async (req, res) => {
    try {      
        console.log("LOGGER ROUTE HIT");

        const downloadsDir = path.join(__dirname, '..', "public", "Downloads");
        console.log("downloadsDir:", downloadsDir);

        const files = fs.readdirSync(downloadsDir);
        console.log("files:", files);

        const fileName = files.find(f => f.startsWith("logger"));
        console.log("fileName:", fileName);

        if (!fileName) {
            return res.status(404).send("No logger file found");
        }

        const filePath = path.join(downloadsDir, fileName);
        console.log("filePath:", filePath);

        res.download(filePath, fileName);
    } catch (err) {
        console.error("LOGGER ERROR:", err);
        res.status(500).send("Internal error");
    }
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