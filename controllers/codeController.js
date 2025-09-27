// const db = require("../db/queries")
// const { body, validationResult } = require("express-validator");

// const nodemailer = require("nodemailer");

indexGet = async (req, res) => {
    res.render('indexCode', {title: 'Made By Shu - Web Developement'})
}

formPost = async (req, res) => {
    
    res.render('formResponse')
}

module.exports = {
    indexGet,
    formPost
}