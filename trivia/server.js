//npm install express --save
var express = require('express') //load the framework
// require path so that we can use path stuff like path.join
var session = require('express-session');
var path = require('path');
var bodyParser = require('body-parser') //for post data
var app = express()
//for session handling
app.use(session({secret: 'codingdojorocks', resave: true, saveUninitialized: true}));  // string for encryption
app.use(express.static(path.join(__dirname, './views')));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.set('view engine', 'html');
// This goes in our server.js file so that we actually use the mongoose config file!
require('./config/mongoose.js');
// this line requires and runs the code from our routes.js file and passes it app so that we can attach our routing rules to our express application!
require('./config/routes.js')(app);
app.listen(5000, function(){
	console.log('cool stuff on: 5000');
});