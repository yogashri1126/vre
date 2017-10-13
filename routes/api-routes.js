// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our models
//assume our db= vre
//two tables: volunteer (Vol) and rescuee (resQ)
var db = require("../models");
var vol= require("../info") //we will need to make another js file containing all the information for the volunteers


// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the participants
  app.get("/api/vre", function(req, res) {
    // findAll returns all entries for a table when used with no options
    db.vre.findAll({}).then(function(dbvre) {
      // We have access to the vre as an argument inside of the callback function
      res.json(dbvre);
    });
  });

  // POST route for saving a new vre
  app.post("/api/vre", function(req, res) {
    // create takes an argument of an object describing the item we want to
    // insert into our table. In this case we just we pass in an object with a text
    // and complete property (req.body)



    if (vol){
    db.Vol.create({
      first_name: req.body.first_name,
last_name: req.body.last_name, 
email: req.body_email, 
password: req.body.password,
phoneNumber: req.body.phoneNumber,
address: req.body.address, 
city: req.body.city,
state: req.body.state,
zip: req.body.zip,
emerg: req.body.emerg,
relationship: req.body.relationship,
ePhone: req.body.ePhone,
travel: req.body.travel,
jan: req.body.jan,
feb: req.body.feb,
march: req.body.march;
april: req.body.april;
may: req.body.may;
june: req.body.june,
july: req.body.july,
aug: req.body.aug,
sept: req.body.sept,
oct: req.body.oct,
nov: req.body.nov,
dec: req.body.dec,
chainsaw: req.body.chainsaw,
roapRescueEquip: req.body.roapRescueEquip,
comPumperTruck: comPumperTruck,
backhoe: req.body.backhoe,
veteran: req.body.veteran,
ert: req.body.ert,
nurse: req.body.nurse,
doc: req.body.doc,
veterinarian: req.body.veterinarian,
vetTech: req.body.vetTech,
animTAB: req.body.animTAB,
comDriver: req.body.comDriver,
formTextEquip: req.body.formTextEquip,
formTextSkill: req.body.formTextSkill,,
modalNote: req.body.modalNote

    }).then(function(dbvre) {
      // We have access to the new vre as an argument inside of the callback function
      res.json(dbvre);
    })
    .catch(function(err) {
      // Whenever a validation or flag fails, an error is thrown
      // We can "catch" the error to prevent it from being "thrown", which could crash our node app
      res.json(err);
    });
  }

  if(resq)
    {db.ResQ.create({
      name: req.body.name,
      coordinate: req.body.coordinate //converted the address to a coordinate using the mapbox API
      email: req.body.email
      password: req.body.password
      phone: req.body.phone
      emergency: req.body.emergency
      emerphone: req.body.emerphone
      travel: req.body.travel

    }).then(function(dbvre) {
      // We have access to the new vre as an argument inside of the callback function
      res.json(dbvre);
    })
    .catch(function(err) {
      // Whenever a validation or flag fails, an error is thrown
      // We can "catch" the error to prevent it from being "thrown", which could crash our node app
      res.json(err);
    });}

  });

  function addToCoordinates(){
    var address = vol.address;
    directionsURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + address + '.json?' +
    'access_token=pk.eyJ1IjoiYmJtYXBib3giLCJhIjoiY2o1Njl0eXdjMGs4eTJ4dDYxd2htdG1nMyJ9.RkRe_pnUD1Tc-b8Re7SWKw';

   //make ajax call to mapbox geocoding api
    $.ajax({
      url:directionsURL,
      method: 'GET',
      dataType:'json'
    }).done(function(res){
      console.log(res.features[0].center);
    });
  }

};

