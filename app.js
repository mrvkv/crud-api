const express = require('express');

const app = express();

app.listen(3000, () => console.log('server is listening to port 3000'));

module.exports = app;
