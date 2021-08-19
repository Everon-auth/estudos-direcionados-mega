
const express = require('express');
// const cors = require('cors');
const bodyParser = require('body-parser');
const multipart = require('connect-multiparty');

const app = express();
app.use(function(req, res, next) {
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
