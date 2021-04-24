module.exports = function (sequelize) {
  const Sequelize = require("sequelize");
  var informationModel = sequelize.define(
    "information",
    {
      id: { type: Sequelize.STRING, primaryKey: true },
      typeid: Sequelize.STRING,
      name: Sequelize.STRING,
      contactpersonname: Sequelize.STRING,
      contact: Sequelize.BIGINT,
      altercontact: Sequelize.BIGINT,
      email: Sequelize.STRING,
      website: Sequelize.STRING,
      address: Sequelize.STRING,
      city: Sequelize.STRING,
      state: Sequelize.STRING,
      country: Sequelize.STRING,
      created_at: Sequelize.STRING,
      updated_at: Sequelize.STRING,
      isactive: Sequelize.STRING,
    },
    { timestamps: false, freezeTableName: true }
  );
  return informationModel;
};
