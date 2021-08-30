"use strict";

// chama o requerimento do mnódulo http do node
var http = require("http"); // endereço


var host = 'localhost'; // porta

var port = 9000;

var express = require('express'); // const cors = require('cors');


var bodyParser = require('body-parser');

var multipart = require('connect-multiparty');

var app = express();
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
})); // const corsOptions = {
//   origin: '*',
//   optionsSuccessStatus: 200
// };
// app.use(cors(corsOptions));

var multipartMiddleware = multipart({
  uploadDir: './imgs'
});
app.post('/upload', multipartMiddleware, function (req, res) {
  var files = req.files;
  console.log(files);
  res.json({
    message: files
  });
});
app.listen(8000, function () {
  console.log('Servidor porta 8000');
}); ////////////////////////////////////////////////////
//Servidor json com a API node http
///////////////////////////////////////////////////

var requestListener = function requestListener(req, res) {
  res.setHeader("content-type", "application/json");
  res.writeHead(200);
  res.extended("{\"message\": \"This is a JSON response\"}");
};

var server = http.createServer(requestListener);
server.listen(port, host, function () {
  console.log("server is running on http://".concat(host, ":").concat(port));
});