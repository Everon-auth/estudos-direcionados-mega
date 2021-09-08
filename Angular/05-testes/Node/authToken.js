const config = require('./TokenConfig.js')
const crypto = require('crypto');
const http = require('http');
const express = require('express');
const app = express();

const _CORS_Header = (response) => {
    response.header("Access-Control-Allow-Origin", "*");
    response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
}



const header = config.header;

function GenToken(head = header) {

    return {
        newToken: (payloadperson) => {
            const header = JSON.stringify(head);

            const payload = JSON.stringify(payloadperson);

            const base64Header = Buffer.from(header).toString('base64').replace(/=/g, '');
            const base64Payload = Buffer.from(payload).toString('base64').replace(/=/g, '');
            const secret = config.key

            const data = base64Header + '.' + base64Payload;

            const signature = crypto
                .createHmac('sha256', secret)
                .update(data)
                .digest('base64');

            const signatureUrl = signature
                .replace(/\+/g, '-')
                .replace(/\//g, '_')
                .replace(/=/g, '');

            return signatureUrl;
        },
        verify: (token) => {
            crypto.verify(config.header.alg,token)
        }

    }
}


app.get('/token/:nome/:id', (req, res, next) => {
    // Headers setados para não dar erro do CORS
    _CORS_Header(res);

    const token = GenToken().newToken(req.params)

    res.json({ token: token });
})
app.get('/tokenValidate/:token', (req, res, next) => {
    _CORS_Header(res);
    console.log(req.params.token)
     GenToken().verify(req.params.token)
})
const server = http.createServer(app);
server.listen(config.porta);