var express = require('express');
var mongoose = require('mongoose');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
mongoose.Promise = global.Promise;
require('./server/config/mongoose.js')(app)
require('./server/models/task.js')(app)
require('./server/config/routes.js')(app)
app.listen(8000, function() {
    console.log("listening on port 8000");
})