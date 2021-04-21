module.exports = function (sequelize, config, app, Sequelize) {
  const unprotectedRouter = require("express").Router();
  // unprotected routes field:
  const newResources = require("./newResources")(sequelize, config, app, Sequelize);
  unprotectedRouter.use("/newResources", newResources);

  const getResources = require("./getResources")(sequelize, config, app, Sequelize);
  unprotectedRouter.use("/getResources", getResources);
  
  return unprotectedRouter;
};
