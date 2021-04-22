module.exports = function (sequelize, config, app, Sequelize) {
  const unprotectedRouter = require("express").Router();
  // unprotected routes field:
  const newResources = require("./addResources")(sequelize, config, app, Sequelize);
  unprotectedRouter.use("/addResources", newResources);

  const getResources = require("./getResources")(sequelize, config, app, Sequelize);
  unprotectedRouter.use("/getResources", getResources);

  const fetchResourcesType = require("./fetchResources")(sequelize, config, app, Sequelize);
  unprotectedRouter.use("/fetchResources", fetchResourcesType);

  const fetchResourcesByType = require("./fetchResourcesByType")(sequelize, config, app, Sequelize);
  unprotectedRouter.use("/fetchResourcesByType", fetchResourcesByType);
  
  return unprotectedRouter;
};
