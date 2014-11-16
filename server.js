var http = require('http');
var server = http.createServer(function(req, res) {
	res.write('Hello World');
	res.end();
});
var port = process.env.PORT || 9000;
server.listen(port, function(){
	console.log("listening on %d" + port);
});

