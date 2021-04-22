module.exports = function (sequelize) {
  fetchResourcesByTypeRouter = require("express").Router();
  const informationData = require("../databasemodel/information")(sequelize);
  const resourcetypeData = require("../databasemodel/resourcetype")(sequelize);
  var moment = require("moment");
  const common = require("../common");
  informationData.belongsTo(resourcetypeData, { foreignKey: "typeid" });
  //register call
  fetchResourcesByTypeRouter.get("/", function (req, res) {
      try {
          let typeid = req.query.typeid;
          informationData
            .findAll({ where: { typeid: typeid } })
            .then((resourceResult) => {
              common.cacheHeader(res, resourceResult);
              res.send(resourceResult);
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
      return fetchResourcesByTypeRouter;
};
