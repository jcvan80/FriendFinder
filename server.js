//NPM packages

var express = require("express");
var bodyParser = require("body-parser");


var app = express();

var port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.listen(port, function(){
    console.log( "App listening on PORT: " + port);
});