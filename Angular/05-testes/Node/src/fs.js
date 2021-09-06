const fs = require('fs');

module.exports = function filesystem() {

    const readFile = (file, res) => {
        fs.readFileSync(file, (err, data) => {
            res.writeHead(200)
            res.write(data)
            return res.end
        })
    }
    const createFile = (file) => {
        fs.appendFile('teste.js', 'Olá', (err) => {
            if (err) throw err;
            console.log('criado!')
        })
    }

    return {
        createFile
    }
}