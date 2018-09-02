const mongoose = require('mongoose');
const chalk = require('chalk');
const db = require('./config').db;

const error = chalk.bold.red;
const info = chalk.bold.green;

module.exports = () => {
  mongoose.connect(`${db.host}${db.name}`, {useNewUrlParser: true})
  .then(() => console.log('connected to ' + info(db.host + '' + db.name)))
  .catch((err) => console.log(err));
}
