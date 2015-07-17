var express = require('express');
var app = express();

// Body Parser
var bodyParser = require('body-parser');
app.use(bodyParser.json());

// Session
var session = require('express-session');
app.use(session({
  secret: 'encryption key',
  resave: false,
  saveUninitialized: true
}))

app.use(express.static(__dirname + '/client'));
var server = app.listen(1400);
// Sockets
io = require('socket.io').listen(server);

// Mongoose
require('./server/config/mongoose.js');
// HTTP Routes`	
require('./server/config/routes.js')(app);
// SQL
// require('./server/config/sql.js');
// Socket Routes
require('./server/config/socket.routes.js')(app);

console.log("***** Server: 1400 up and running *****");


