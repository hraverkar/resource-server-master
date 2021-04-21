module.exports = function (sequelize, config, app, Sequelize) {
  let databaseRoute = require("express").Router();
  // unprotected routejwt, jwtOptions, sequelize, config, loggerFunction, fs
  let unprotected = require("./unprotected/unprotected")(
    sequelize,
    config,
    app,
    Sequelize,
  );

  databaseRoute.use("/unprotected", unprotected);

  return databaseRoute;
};
