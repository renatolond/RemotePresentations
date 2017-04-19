var io = require('socket.io').listen(8082);
var reveal_socket_id;
var control_socket_id;


var robot = require("robotjs");

io.sockets.on('connection', function (socket) {
  
  socket.emit('ready', 'Server ready');

  socket.on('reveal', function (data) {
    reveal_socket_id = socket.id;
    console.log('reveal connected');
  });

  socket.on('control', function (data) {
    control_socket_id = socket.id;
    console.log('control connected');
  });
  
  socket.on('prev', function (data) {
		robot.keyTap("left");
		  console.log('reveal prev');
  });

  socket.on('next', function (data) {
		robot.keyTap("right");
		  console.log('reveal next');
  });
});
var client = require('socket.io-client');
var socket_client = client.connect("http://localhost:8082");
socket_client.on('connect', function(){
		    socket_client.emit('control');
		});
var connect = require('connect');
var s = connect.createServer(connect.static(__dirname));
s.use(function(req, res){
	if (req.url == '/next.html') {
		socket_client.emit('next');
		res.end('Next');
	}
	else if (req.url == '/prev.html') {
		socket_client.emit('prev');
		res.end('Next');
	}
  });
s.listen(8089);
