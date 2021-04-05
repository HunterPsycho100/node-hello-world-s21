const http = require('http');

cont port = process.env.PORT || 5000;

const server = http.createServer((request, response) => {
	response.statusCode = 200;
	response.setHeader =('Constent-Type', 'text/plain');
	respond.end(Hello World\n\nCool!');
});

server.listen(port, (err) => {
	if(err) {
		return console.log('Something went wrong ', err);
	}
	console.log(`Server Listening on: ${port}`);
});
