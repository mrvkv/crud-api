const express = require('express');
const config = require('./config');
const db = require('./db')();

const app = express();

app.listen(config.port, () => console.log('server is listening to port ' + config.port));

module.exports = app;
