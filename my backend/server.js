const http = require('http');
const routes = require('./routes/routes');
require('./db/connection'); // just to trigger connection

const server = http.createServer((req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  routes(req, res);
});

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});