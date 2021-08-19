// chama o requerimento do mnódulo http do node
const http = require("http");
// endereço
const host = 'localhost';
// porta
const port = 9000

const express = require('express');
// const cors = require('cors');
const bodyParser = require('body-parser');
const multipart = require('connect-multiparty');

const app = express();
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// const corsOptions = {
//   origin: '*',
//   optionsSuccessStatus: 200
// };
// app.use(cors(corsOptions));

const multipartMiddleware = multipart({ uploadDir: './imgs' });
app.post('/upload', multipartMiddleware, (req, res) => {
  const files = req.files;
  console.log(files);
  res.json({ message: files });
});
app.listen(8000, () => {
  console.log('Servidor porta 8000');
})


////////////////////////////////////////////////////
          //Servidor json com a API node http
///////////////////////////////////////////////////

const requestListener = function( req,res){
  res.setHeader("content-type","application/json");
  res.writeHead(200);
  res.extended(`{"message": "This is a JSON response"}`)
}

const server = http.createServer(requestListener);
server.listen(port,host, ()=>{
  console.log(`server is running on http://${host}:${port}`);
});
