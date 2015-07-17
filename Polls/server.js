var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();

app.use(express.static(path.join(__dirname, './client')));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.set('views', path.join(__dirname, './client'));
app.set('view engine', 'html');

require("./config/mongoose.js");
require("./config/routes.js")(app);

var server = app.listen(5555, function() {
	console.log("listening on port 5555");
});

var io = require('socket.io').listen(server);

io.sockets.on('connection', function(socket) {
	// (Listener) On Connection (contant)
 	console.log("Connected - Socket ID: ", socket.id);
  	// (Listener) On Disconnect (contant)
	socket.on('disconnect', function() { 
		console.log("Disconnected - Socket ID: ", socket.id);
 	})
});