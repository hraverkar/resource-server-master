var config = require("./config");
config.user = "sa";
config.password = "Admin12345!"; 
config.server = "127.0.0.1";
config.database = "CovidResource";
config.port = 1433;
config.accessTokenTimeOut = "1"; // time out in hour.
config.dialect = "mssql"

config.hostname = 'postgres://postgres:root@127.0.0.1:5432/CovidResource';

config.sqlConfig = {
  user: config.user,
  password: config.password,
  server: config.server,
  database: config.database,
  port: config.port,
};

config.unsecureport = 7272;

module.exports = config;