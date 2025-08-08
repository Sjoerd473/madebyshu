// const db = require("../db/queries")


indexGet = async (req, res) => {
  
    res.render('index', {title: 'Made By Shu'})
}

module.exports = {
    indexGet
}