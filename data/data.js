//we are using this to put the jquery and make the ajax call, please put data.js in your html

//put jQuery here
//make ajax request $post here
var $= require("jQuery");

// require("jsdom").env("", function(err, window) {
//     if (err) {
//         console.error(err);
//         return;
//     }

//     var $ = require("jQuery")(window);
// });

$(document).ready(function() {

    $("#addVol").on('click', function(event) {
        event.preventDefault();
        var volunteer = {
            first_name: $("#first_name").val.trim(),
            last_name: $("#last_name").val.trim(),
            email: $("#email").val.trim(),
            password: $("#password").val.trim(),
            phoneNumber: $("#phoneNumber").val.trim(),
            address: $("#address").val.trim(),
            city: $("#city").val.trim(),
            Alabama: $("#Alabama").val.trim(),
            Alaska: $("#Alaska").val.trim(),
            Arizona: $("#Arizona").val.trim(),
            Arkansas: $("#Arkansas").val.trim(),
            California: $("#California").val.trim(),
            Colorado: $("#Colorado").val.trim(),
            Connecticut: $("#Connecticut").val.trim(),
            Delaware: $("#Delaware").val.trim(),
            Florida: $("#Florida").val.trim(),
            Georgia: $("#Georgia").val.trim(),
            Hawaii: $("#Hawaii").val.trim(),
            Idaho: $("#Idaho").val.trim(),
            Illinois: $("#Illinois").val.trim(),
            Indiana: $("#Indiana").val.trim(),
            Iowa: $("#Iowa").val.trim(),
            Kansas: $("#Kansas").val.trim(),
            Kentucky: $("#Kentucky").val.trim(),
            Louisiana: $("#Louisiana").val.trim(),
            Maine: $("#Maine").val.trim(),
            Maryland: $("#Maryland").val.trim(),
            Massachusetts: $("#Massachusetts").val.trim(),
            Michigan: $("#Michigan").val.trim(),
            Minnesota: $("#Minnesota").val.trim(),
            Mississippi: $("#Mississippi").val.trim(),
            Missouri: $("#Missouri").val.trim(),
            Montana: $("#Montana").val.trim(),
            Nebraska: $("#Nebraska").val.trim(),
            Nevada: $("#Nevada").val.trim(),
            New_Hampshire: $("#New Hampshire").val.trim(),
            New_Jersey: $("#New Jersey").val.trim(),
            New_Mexico: $("#New Mexico").val.trim(),
            New_York: $("#New York").val.trim(),
            North_Carolina: $("#North Carolina").val.trim(),
            North_Dakota: $("#North Dakota").val.trim(),
            Ohio: $("#Ohio").val.trim(),
            Oklahoma: $("#Oklahoma").val.trim(),
            Oregon: $("#Oregon").val.trim(),
            Pennsylvania: $("#Pennsylvania").val.trim(),
            Rhode_Island: $("#Rhode Island").val.trim(),
            South_Carolina: $("#South Carolina").val.trim(),
            South_Dakota: $("#South Dakota").val.trim(),
            Tennessee: $("#Tennessee").val.trim(),
            Texas: $("#Texas").val.trim(),
            Utah: $("#Utah").val.trim(),
            Vermont: $("#Vermont").val.trim(),
            Virginia: $("#Virginia").val.trim(),
            Washington: $("#Washington").val.trim(),
            West_Virginia: $("#West Virginia").val.trim(),
            Weisconsin: $("#Weisconsin").val.trim(),
            Wyoming: $("#Wyoming").val.trim(),
            zip: $("#zip").val.trim(),
            emerg: $("#emerg").val.trim(),
            relationship: $("#relationship").val.trim(),
            ePhone: $("#ePhone").val.trim(),
            travel: $("#travel").val.trim(),
            jan: $("#jan").val.trim(),
            feb: $("#feb").val.trim(),
            march: $("#march").val.trim(),
            april: $("#april").val.trim(),
            may: $("#may").val.trim(),
            june: $("#june").val.trim(),
            july: $("#july").val.trim(),
            aug: $("#aug").val.trim(),
            sept: $("#sept").val.trim(),
            oct: $("#oct").val.trim(),
            nov: $("#nov").val.trim(),
            dec: $("#dec").val.trim(),
            chainsaw: $("#chainsaw").val.trim(),
            roapRescueEquip: $("#roapRescueEquip").val.trim(),
            comPumperTruck: $("#comPumperTruck").val.trim(),
            backhoe: $("#backhoe").vol.trim(),
            veteran: $("#veteran").vol.trim(),
            ert: $("#ert").val.trim(),
            nurse: $("#nurse").val.trim(),
            doc: $("#doc").val.trim(),
            veterinarian: $("#veterinarian").val.trim(),
            vetTech: $("#vetTech").val.trim(),
            animTAB: $("#animTAB").val.trim(),
            comDriver: $("#trim").val.trim(),
            modalNote: $("#modalNote").val.trim()
        }
        $.post("/api/api-routes", volunteer);
    });

    $('#signIn').on('click', function(event) {
        event.preventDefault();
        var signIn = {
            username: $("#username").val.trim(),
            password: $("#password").val.trim(),
        }

        $.post("/api/api-routes", signIn);
    });

    $('#addResuceMe').on('click', function(event) {
        event.preventDefault();
        var rescuee = {
            first_name: $("#first_name").val.trim(),
            last_name: $("#last_name").val.trim(),
            email: $("#email").val.trim(),
            password: $("#password").val.trim(),
            phoneNumber: $("#phoneNumber").val.trim(),
            address: $("#address").val.trim(),
            city: $("#city").val.trim(),
            Alabama: $("#Alabama").val.trim(),
            Alaska: $("#Alaska").val.trim(),
            Arizona: $("#Arizona").val.trim(),
            Arkansas: $("#Arkansas").val.trim(),
            California: $("#California").val.trim(),
            Colorado: $("#Colorado").val.trim(),
            Connecticut: $("#Connecticut").val.trim(),
            Delaware: $("#Delaware").val.trim(),
            Florida: $("#Florida").val.trim(),
            Georgia: $("#Georgia").val.trim(),
            Hawaii: $("#Hawaii").val.trim(),
            Idaho: $("#Idaho").val.trim(),
            Illinois: $("#Illinois").val.trim(),
            Indiana: $("#Indiana").val.trim(),
            Iowa: $("#Iowa").val.trim(),
            Kansas: $("#Kansas").val.trim(),
            Kentucky: $("#Kentucky").val.trim(),
            Louisiana: $("#Louisiana").val.trim(),
            Maine: $("#Maine").val.trim(),
            Maryland: $("#Maryland").val.trim(),
            Massachusetts: $("#Massachusetts").val.trim(),
            Michigan: $("#Michigan").val.trim(),
            Minnesota: $("#Minnesota").val.trim(),
            Mississippi: $("#Mississippi").val.trim(),
            Missouri: $("#Missouri").val.trim(),
            Montana: $("#Montana").val.trim(),
            Nebraska: $("#Nebraska").val.trim(),
            Nevada: $("#Nevada").val.trim(),
            New_Hampshire: $("#New Hampshire").val.trim(),
            New_Jersey: $("#New Jersey").val.trim(),
            New_Mexico: $("#New Mexico").val.trim(),
            New_York: $("#New York").val.trim(),
            North_Carolina: $("#North Carolina").val.trim(),
            North_Dakota: $("#North Dakota").val.trim(),
            Ohio: $("#Ohio").val.trim(),
            Oklahoma: $("#Oklahoma").val.trim(),
            Oregon: $("#Oregon").val.trim(),
            Pennsylvania: $("#Pennsylvania").val.trim(),
            Rhode_Island: $("#Rhode Island").val.trim(),
            South_Carolina: $("#South Carolina").val.trim(),
            South_Dakota: $("#South Dakota").val.trim(),
            Tennessee: $("#Tennessee").val.trim(),
            Texas: $("#Texas").val.trim(),
            Utah: $("#Utah").val.trim(),
            Vermont: $("#Vermont").val.trim(),
            Virginia: $("#Virginia").val.trim(),
            Washington: $("#Washington").val.trim(),
            West_Virginia: $("#West Virginia").val.trim(),
            Weisconsin: $("#Weisconsin").val.trim(),
            Wyoming: $("#Wyoming").val.trim()
        }

        $.post("/api/api-routes", rescuee);
    });

});