//--------------------------------------
//Node Dependencies
//--------------------------------------
var express = require("express");
var bodyParser = require("body-parser");
var methodOveride = require("method-override");

var app = express();

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: false }));

var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set('view engine', 'handlebars');

var routes = require('./controllers/burgers_controller.js');
app.use('/', routes);

var port = 3000;
app.listen(port);
console.log("Listening on Port: " + port);
