'use strict';


//server
var http = require('http');
var pathLib = require('path');
var express = require('express');
var app = express();
var server = http.createServer(app);

app.use(express.static(pathLib.resolve(__dirname, 'public')));

app.set("jsonp callback", true);

app.get('/confirm',function(req,res){
  res.end("confirmed");
});
app.get('/testget',function(req,res){
  console.log("testget called");
  res.end("testget confirmed");
});
app.post('/testpost',function(req,res){
  console.log("testpost called");
  res.end("testpost confirmed");
});
server.listen(process.env.PORT || 8080, process.env.IP || "0.0.0.0", function(){
  var addr = server.address();
  console.log("Flower server listening at", addr.address + ":" + addr.port);
});





