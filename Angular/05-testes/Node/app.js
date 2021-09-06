const http = require('http');
/* const sequelize = require('./src/sequelize.js') */
const fs = require('./src/fs.js')

http.createServer(function (req, res) {
    fs.call()
}).listen(8000)