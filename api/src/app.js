const express = require('express');
const server = express();
const routes = require('./routes/index.js');
require('./db.js');

server.name = 'API';
server.use('/', routes);

module.exports = server;
