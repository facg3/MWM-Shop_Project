const http = require('http');


const router = require('./router');

const host = process.env.HOST || 'localhost';

const PORT = process.env.PORT || 8080;


const server = http.createServer(router);

server.listen(PORT, () => {
  console.log('Server running..');
});
