module.exports = function (sequelize) {
  newResourcesRouter = require("express").Router();
  var validate = require("../validate");
  var uuid = require("uuid");
  const informationData = require("../databasemodel/information")(sequelize);
  var moment = require("moment");

  //register call
  newResourcesRouter.post("/", function (req, res) {
    try {
      if (
        validate(req.body.name) &&
        validate(req.body.contact)
      ) {
        res.send({
          message: "Server error authenticating user, try again !!",
        });
      } else {
        insertUserIntoDatabase(req, res);
      }
    }
    catch (error) {
      res.send({
        message: "Server Error while registering ,try again!!",
      });
    }
  });

  function insertUserIntoDatabase(req, res) {

    var typeid = req.body.typeid;
    var name = req.body.name;
    var contactpersonname = req.body.contactpersonname;
    var contact = req.body.contact;
    var altercontact =  req.body.altercontact;
    var email = req.body.email;
    var website = req.body.website;
    var city = req.body.city;
    var state = req.body.state;
    var country = req.body.country;
    var address = req.body.address;
    let uuidv4 = uuid.v4();
    let date = new Date();
    let d = moment(date).format("YYYY-MM-DD HH:mm:ss");
    console.log(uuidv4);

    informationData
      .create({
        id: uuidv4,
        typeid : typeid,
        name: name,
        contactpersonname: contactpersonname,
        contact: contact,
        altercontact: altercontact,
        email: email,
        website: website,
        address: address,
        city: city,
        state: state,
        country: country,
        created_at: d,
        updated_at: d,
        isactive: 1
            })
      .then(function (result) {
        let mesg;
        if (result.id !== null) mesg = "Successfully saved user added";
        else mesg = "Server encountered error while inserting annotations";
        res.send({
          message: mesg,
        });
      })
      .catch((error) => {
        console.log(error);
        res.send({
          message: "Server encountered error while inserting annotations",
        });
      });
  }
  return newResourcesRouter;
};
