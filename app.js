var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('./database/db');
var userRouter = require('./routes/users');


var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));

app.use('/',userRouter).listen(4000,()=>console.log('Server running on port 4000'));