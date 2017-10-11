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
      name: req.body.name,
      address: req.body.address //there will be mre parameters

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
      address: req.body.address

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

};
