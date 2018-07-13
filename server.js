var express = require('express');
var morgan = require('morgan');
var path = require('path');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var config = require('./app/config');

var app = express();



app.use(express.static(path.join(__dirname, '/public')));
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));

mongoose.connect(config.DB);

var port = config.APP_PORT || 4000;

app.listen(port);
console.log('Listening at port ' + port);

var todoRoutes = require('./app/Routes');
app.use('/api', todoRoutes);


app.use(function(req, res, next){
	res.setHeader('Access-Control-Allow-Origin', 'http://localhost:' + port);
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
	res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, content-type');
	next();
})

app.get('/', function(req, res, next){
	res.sendFile('./public/index.html');
})