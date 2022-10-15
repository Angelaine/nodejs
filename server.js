var express = require('express');
var app = express();
var fs = require("fs");

var serie = {
      "series4" : {
      "name" : "The Flash",
      "seasons" : "7",
      "genre" : "Action",
      "id": 4
   }
}

app.get('/listSeries', function (req, res) {
   fs.readFile( __dirname + "/" + "series.json", 'utf8', function (err, data) {
      console.log( data );
      res.end( data );
   });
})

app.get('/listSeries/:id', function (req, res) {
   // First read existing users.
   fs.readFile( __dirname + "/" + "series.json", 'utf8', function (err, data) {
      var series = JSON.parse( data );
      var serie = series["series" + req.params.id] 
      console.log( serie );
      res.end( JSON.stringify(serie));
   });
})


app.delete('/deleteSerie', function (req, res) {
   // First read existing users.
   fs.readFile( __dirname + "/" + "series.json", 'utf8', function (err, data) {
      data = JSON.parse( data );
      delete data["series" + 1];
      console.log( data );
      res.end( JSON.stringify(data));
   });
})

app.delete('/deleteSerie/:id', function (req, res) {
   // First read existing users.
   fs.readFile( __dirname + "/" + "series.json", 'utf8', function (err, data) {
      data = JSON.parse( data );
      delete data["series" + req.params.id];
       
      console.log( data );
      res.end( JSON.stringify(data));
   });
})

app.post('/addSerie', function (req, res) {
   // First read existing users.
   fs.readFile( __dirname + "/" + "series.json", 'utf8', function (err, data) {
      data = JSON.parse( data );
      data["series4"] = serie["series4"];
      console.log( data );
      res.end( JSON.stringify(data));
   });
})




var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port)
})