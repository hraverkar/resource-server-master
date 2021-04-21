module.exports = function (sequelize) {
    getResourcesRouter = require("express").Router();
    const informationData = require("../databasemodel/information")(sequelize);
    const resourcetypeData = require("../databasemodel/resourcetype")(sequelize);
    var moment = require("moment");
    const common = require("../common");
    informationData.belongsTo(resourcetypeData, { foreignKey: "typeid" });
    //register call
    getResourcesRouter.get("/", function (req, res) {
        try {
            informationData
              .findAll({ include: [{ model: resourcetypeData }] })
              .then((propertyResult) => {
                common.cacheHeader(res, propertyResult);
                res.send(propertyResult);
              })
              .catch((error) => {
                let errMessage = {
                  message: "Server encountered error in fetching property details",
                };
                common.cacheHeader(res, errMessage);
                res.send(errMessage);
              });
          } catch (error) {
            let errMessage = {
              message: "Server encountered error in fetching property details",
            };
            common.cacheHeader(res, errMessage);
            res.send(errMessage);
          }
        });
        return getResourcesRouter;
  };
  