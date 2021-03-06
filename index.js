var express = require('express');
var app = express();
var http = require('http');
const Sequelize = require('sequelize');
const cors = require('cors');
var Config = require('./config');

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, contentType,Content-Type, Accept, Authorization");
    next();
});

app.use(express.urlencoded({
  extended: true,
  limit: "5mb"
}));

app.use(express.json({
  limit: "5mb"
}));
app.use(cors());

var sequelize = new Sequelize(Config.hostname);

// const sequelize = new Sequelize(Config.database, Config.user, Config.password, {
//   host:"127.0.0.1", dialect: "mssql"
// });

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });

const dbroutes = require("./databaseRoutes")(
  sequelize,
  Config,
  app,
  Sequelize
);
app.use(dbroutes);

app.disable("x-powered-by");
let currentServer;
currentServer = http.createServer(app).listen(Config.unsecureport, function () {
  process.send && process.send("ready");
  console.log(Config.unsecureport);
});