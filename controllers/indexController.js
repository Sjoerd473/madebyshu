// const db = require("../db/queries")

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
    indexEnGet
}