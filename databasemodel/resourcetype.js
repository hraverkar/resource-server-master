module.exports = function (sequelize) {
  const Sequelize = require("sequelize");
  var resourcetypeModel = sequelize.define(
    "resourcetype",
    {
      typeid: { type: Sequelize.STRING, primaryKey: true },
      typename: Sequelize.STRING
    },
    { timestamps: false, freezeTableName: true }
  );
  return resourcetypeModel;
};