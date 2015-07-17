//npm install express --save
var express = require('express') //load the framework
// require path so that we can use path stuff like path.join
var session = require('express-session');
var path = require('path');
var bodyParser = require('body-parser') //for post data
var app = express()
app.listen(5000, function(){
	console.log('cool stuff on: 5000');
});
//for session handling
app.use(session({secret: 'codingdojorocks', resave: true, saveUninitialized: true}));  // string for encryption
app.use(express.static(path.join(__dirname, './client')));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

require('./config/mongoose.js') //auto load models
// require('./config/socketio.js')(server)
require('./config/routes.js')(app) //load routes
