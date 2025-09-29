// const db = require("../db/queries")

privacyGet = async (req, res) => {
    
    res.render('privacy', {title: 'Made by Shu - Privacy'})
}
cookieGet = async (req, res) => {
    
    res.render('cookie', {title: 'Made by Shu - Cookies'})
}

indexGet = async (req, res) => {
  
    // res.render('index', {title: 'Made By Shu'})
    res.redirect('/webdev')
}

module.exports = {
    privacyGet,
    indexGet
}