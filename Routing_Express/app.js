var express = require('express');

var app = express();

app.get('/', function(req, res){
  res.send("This is the Homepage");
})

app.get('/contact', function(req, res){
  res.send("This is the Contact Page");
})

app.get('/profile/:id', function(req, res){
  res.send("This is the request to see a profile of ID:" + req.params.id);
})

app.get('/profile/:name', function(req, res){
  res.send("This is the request to see a profile of name:" + req.params.name);
})

app.listen(3000);
