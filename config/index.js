const convict = require('convict');

let config = convict({
  env: {
    doc: "Application environment",
    format: ["prod", "dev", "test"],
    default: "dev",
    env: "NODE_ENV"
  },
  ip: {
    doc: "The IP address of server",
    format: "ipaddress",
    default: "127.0.0.1",
    env: "IP_ADDRESS"
  },
  port: {
    doc: "Port on which server will listen",
    format: "port",
    default: 8080,
    env: "PORT",
    arg: "port"
  },
  db: {
    host: {
      doc: "Database host name/IP",
      format: '*',
      default: 'mongodb://localhost:27017/'
    },
    name: {
      doc: "Database name",
      format: String,
      default: 'crud_dev'
    }
  }
});

let env = config.get('env');
config.loadFile('./config/' + env + '.json');

module.exports = config.getProperties();
