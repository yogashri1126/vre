// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our models
//assume our db= vre
//two tables: volunteer (Vol) and rescuee (resQ)
var db = require("../models");
console.log(db.Vol);
console.log(db.ResQ);
//var vol = require("../data/data.js") //we will need to make another js file containing all the information for the volunteers


// Routes
// =============================================================
module.exports = function(app) {

    // GET route for getting all of the participants
    app.get("/api/api-routes", function(req, res) {
        // findAll returns all entries for a table when used with no options
        db.vre.findAll({}).then(function(dbvre) {
            // We have access to the vre as an argument inside of the callback function
            res.json(dbvre);
        });
    });

    // POST route for saving a new vre
    app.post("/api/api-routes", function(req, res) {
        // create takes an argument of an object describing the item we want to
        // insert into our table. In this case we just we pass in an object with a text
        // and complete property (req.body)
        console.log("we're posting!");
        console.log(db.Vol);
        //console.log(db.ResQ);
        console.log(req.body);
        console.log(req.body.first_name)

        db.Vol.create({
                first_name: req.body.first_name,
                last_name: req.body.last_name,
                email: req.body.email,
                password: req.body.password,
                phoneNumber: req.body.phoneNumber,
                address: req.body.address,
                city: req.body.city,
                state: req.body.state,
                // coord: req.body.coord,
                // Alabama: req.body.Alabama,
                // Alaska: req.body.Alaska,
                // Arizona: req.body.Arizona,
                // Arkansas: req.body.Arkansas,
                // California: req.body.California,
                // Colorado: req.body.Colorado,
                // Connecticut: req.body.Connecticut,
                // Delaware: req.body.Delaware,
                // Florida: req.body.Florida,
                // Georgia: req.body.Georgia,
                // Hawaii: req.body.Hawaii,
                // Idaho: req.body.Idaho,
                // Illinois: req.body.Illinois,
                // Indiana: req.body.Indiana,
                // Iowa: req.body.Iowa,
                // Kansas: req.body.Kansas,
                // Kentucky: req.body.Kentucky,
                // Louisiana: req.body.Louisiana,
                // Maine: req.body.Maine,
                // Maryland: req.body.Maryland,
                // Massachusetts: req.body.Massachusetts,
                // Michigan: req.body.Michigan,
                // Minnesota: req.body.Minnesota,
                // Mississippi: req.body.Mississippi,
                // Missouri: req.body.Missouri,
                // Montana: req.body.Montana,
                // Nebraska: req.body.Nebraska,
                // Nevada: req.body.Nevada,
                // New_Hampshire: req.body.New_Hampshire,
                // New_Jersey: req.body.New_Jersey,
                // New_Mexico: req.body.New_Mexico,
                // New_York: req.body.New_York,
                // North_Carolina: req.body.North_Carolina,
                // North_Dakota: req.body.North_Dakota,
                // Ohio: req.body.Ohio,
                // Oklahoma: req.body.Oklahoma,
                // Oregon: req.body.Oregon,
                // Pennsylvania: req.body.Pennsylvania,
                // Rhode_Island: req.body.Rhode_Island,
                // South_Carolina: req.body.South_Carolina,
                // South_Dakota: req.body.South_Dakota,
                // Tennessee: req.body.Tennessee,
                // Texas: req.body.Texas,
                // Utah: req.body.Utah,
                // Vermont: req.body.Vermont,
                // Virginia: req.body.Virginia,
                // Washington: req.body.Washington,
                // West_Virginia: req.body.West_Virginia,
                // Wisconsin: req.body.Wisconsin,
                // Wyoming: req.body.Wyoming,
                zip: req.body.zip,
                emerg: req.body.emerg,
                relationship: req.body.relationship,
                ePhone: req.body.ePhone,
                travel: req.body.travel,
                jan: req.body.jan,
                feb: req.body.feb,
                march: req.body.march,
                april: req.body.april,
                may: req.body.may,
                june: req.body.june,
                july: req.body.july,
                aug: req.body.aug,
                sept: req.body.sept,
                oct: req.body.oct,
                nov: req.body.nov,
                dec: req.body.dec,
                chainsaw: req.body.chainsaw,
                ropeRescue: req.body.ropeRescue,
                comPumperTruck: req.body.comPumperTruck,
                backhoe: req.body.backhoe,
                veteran: req.body.veteran,
                ert: req.body.ert,
                nurse: req.body.nurse,
                doc: req.body.doc,
                veterinarian: req.body.veterinarian,
                vetTech: req.body.vetTech,
                animTAB: req.body.animTAB,
                comDriver: req.body.comDriver,
                modalNote: req.body.modalNote

            }).then(function(dbvre) {
                // We have access to the new vre as an argument inside of the callback function
                //console.log(dbvre);
                res.json(dbvre);

            })
            .catch(function(err) {
                console.log(err);
                // Whenever a validation or flag fails, an error is thrown
                // We can "catch" the error to prevent it from being "thrown", which could crash our node app
                res.json(err);
            });




    });

    // route to update the volunteer database with the coordinates
    app.post("/api/api-routes/vol-coords", function(req, res) {
        db.Vol.findOne({where: {
                email: req.body.email
            }})
            .then(vol => {
                vol.updateAttributes({
                    coord: req.body.coord
                });
                console.log(req.body);
            });
    });

    // retrieve all voluunteers
    app.get("/api/api-routes/get-vols", function(req, res) {
        db.Vol.findAll()
        .then( vols => {
            res.json(vols)
        });
    });


    app.post("/api/api-routes/rescuee", function(req, res) {
        // create takes an argument of an object describing the item we want to
        // insert into our table. In this case we just we pass in an object with a text
        // and complete property (req.body)
        console.log("we're posting!");
        console.log(db.ResQ);
        //console.log(db.ResQ);
        console.log(req.body);

        db.ResQ.create({
                first_name: req.body.first_name,
                last_name: req.body.last_name,
                email: req.body.email,
                password: req.body.password,
                phoneNumber: req.body.phoneNumber,
                address: req.body.address,
                city: req.body.city,
                state: req.body.state

            }).then(function(dbvre) {
                // We have access to the new vre as an argument inside of the callback function
                console.log(dbvre);
                res.json(dbvre);

            })
            .catch(function(err) {
                console.log(err);
                // Whenever a validation or flag fails, an error is thrown
                // We can "catch" the error to prevent it from being "thrown", which could crash our node app
                res.json(err);
            });

    });

        app.post("/api/api-routes/res-coords", function(req, res) {
        db.ResQ.findOne({where:{
                email: req.body.email
            }})
            .then(vol => {
                vol.updateAttributes({
                    coord: req.body.coord
                });
            });
    });

};
