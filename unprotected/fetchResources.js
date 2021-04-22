module.exports = function (sequelize) {
  fetchResourcesRouter = require("express").Router();
  const resourcetypeData = require("../databasemodel/resourcetype")(sequelize);
  const common = require("../common");
  //register call
  fetchResourcesRouter.get("/", function (req, res) {
      try {
          resourcetypeData
            .findAll()
            .then((resourceResult) => {
              common.cacheHeader(res, resourceResult);
              res.send(resourceResult);
            })
            .catch((error) => {
              let errMessage = {
                message: "Server encountered error in fetching resource type details",
              };
              common.cacheHeader(res, errMessage);
              res.send(errMessage);
            });
        } catch (error) {
          let errMessage = {
            message: "Server encountered error in fetching resource type details",
          };
          common.cacheHeader(res, errMessage);
          res.send(errMessage);
        }
      });
      return fetchResourcesRouter;
};
