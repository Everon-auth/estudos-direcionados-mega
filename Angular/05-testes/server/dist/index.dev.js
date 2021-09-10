"use strict";

var _require = require('mongodb'),
    MongoClient = _require.MongoClient;

var uri = "mongodb+srv://evertonauth:<password>@test.at7ee.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
var client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
client.connect(function (err) {
  var collection = client.db("test").collection("devices"); // perform actions on the collection object

  client.close();
});