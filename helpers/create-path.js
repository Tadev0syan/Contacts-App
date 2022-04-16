const path = require('path')

const creatPath = (page) => path.resolve(__dirname, '../views', `${page}.ejs`)

module.exports = creatPath