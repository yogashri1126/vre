//we are using this to put the jquery and make the ajax call, please put data.js in your html

//put jQuery here
//make ajax request $post here
//var $= require("jQuery");

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
            first_name: $("#first_name").val().trim(),
            last_name: $("#last_name").val().trim(),
            email: $("#email").val().trim(),
            password: $("#password").val().trim(),
            phoneNumber: $("#phoneNumber").val().trim(),
            address: $("#address").val().trim(),
            city: $("#city").val().trim(),
            state: $("#state option:selected").text(),
            // Alabama: $("#Alabama").val().trim(),
            // Alaska: $("#Alaska").val().trim(),
            // Arizona: $("#Arizona").val().trim(),
            // Arkansas: $("#Arkansas").val().trim(),
            // California: $("#California").val().trim(),
            // Colorado: $("#Colorado").val().trim(),
            // Connecticut: $("#Connecticut").val().trim(),
            // Delaware: $("#Delaware").val().trim(),
            // Florida: $("#Florida").val().trim(),
            // Georgia: $("#Georgia").val().trim(),
            // Hawaii: $("#Hawaii").val().trim(),
            // Idaho: $("#Idaho").val().trim(),
            // Illinois: $("#Illinois").val().trim(),
            // Indiana: $("#Indiana").val().trim(),
            // Iowa: $("#Iowa").val().trim(),
            // Kansas: $("#Kansas").val().trim(),
            // Kentucky: $("#Kentucky").val().trim(),
            // Louisiana: $("#Louisiana").val().trim(),
            // Maine: $("#Maine").val().trim(),
            // Maryland: $("#Maryland").val().trim(),
            // Massachusetts: $("#Massachusetts").val().trim(),
            // Michigan: $("#Michigan").val().trim(),
            // Minnesota: $("#Minnesota").val().trim(),
            // Mississippi: $("#Mississippi").val().trim(),
            // Missouri: $("#Missouri").val().trim(),
            // Montana: $("#Montana").val().trim(),
            // Nebraska: $("#Nebraska").val().trim(),
            // Nevada: $("#Nevada").val().trim(),
            // New_Hampshire: $("#New_Hampshire").val().trim(),
            // New_Jersey: $("#New_Jersey").val().trim(),
            // New_Mexico: $("#New_Mexico").val().trim(),
            // New_York: $("#New_York").val().trim(),
            // North_Carolina: $("#North_Carolina").val().trim(),
            // North_Dakota: $("#North_Dakota").val().trim(),
            // Ohio: $("#Ohio").val().trim(),
            // Oklahoma: $("#Oklahoma").val().trim(),
            // Oregon: $("#Oregon").val().trim(),
            // Pennsylvania: $("#Pennsylvania").val().trim(),
            // Rhode_Island: $("#Rhode_Island").val().trim(),
            // South_Carolina: $("#South_Carolina").val().trim(),
            // South_Dakota: $("#South_Dakota").val().trim(),
            // Tennessee: $("#Tennessee").val().trim(),
            // Texas: $("#Texas").val().trim(),
            // Utah: $("#Utah").val().trim(),
            // Vermont: $("#Vermont").val().trim(),
            // Virginia: $("#Virginia").val().trim(),
            // Washington: $("#Washington").val().trim(),
            // West_Virginia: $("#West_Virginia").val().trim(),
            // Wisconsin: $("#Wisconsin").val().trim(),
            // Wyoming: $("#Wyoming").val().trim(),
            zip: $("#zip").val().trim(),
            //coord: addToCoordinates($("#address").val().trim(), $("#state option:selected").text(), $("#city").val().trim()),
            emerg: $("#emerg").val().trim(),
            relationship: $("#relationship").val().trim(),
            ePhone: $("#ePhone").val().trim(),
            travel: $("#travel").val().trim(),
            jan: $("#jan").is(':checked'),
            feb: $("#feb").is(':checked'),
            march: $("#march").is(':checked'),
            april: $("#april").is(':checked'),
            may: $("#may").is(':checked'),
            june: $("#june").is(':checked'),
            july: $("#july").is(':checked'),
            aug: $("#august").is(':checked'),
            sept: $("#sept").is(':checked'),
            oct: $("#october").is(':checked'),
            nov: $("#nov").is(':checked'),
            dec: $("#dec").is(':checked'),
            chainsaw: $("#saw").is(':checked'),
            ropeRescue: $("#roapR").is(':checked'),
            comPumperTruck: $("#truckPmp").is(':checked'),
            backhoe: $("#backH").is(':checked'),
            veteran: $("#Vet").is(':checked'),
            ert: $("#ert").is(':checked'),
            nurse: $("#nurse").is(':checked'),
            doc: $("#doc").is(':checked'),
            veterinarian: $("#vet").is(':checked'),
            vetTech: $("#vetT").is(':checked'),
            animTAB: $("#train").is(':checked'),
            comDriver: $("#drive").is(':checked'),
            modalNote: $("#modalNote").is(':checked')
        };

        function addToCoordinates(address, state, city) {
            var add = address + " " + city + " " + state;
            directionsURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + add + '.json?' +
                'access_token=pk.eyJ1IjoiYmJtYXBib3giLCJhIjoiY2o1Njl0eXdjMGs4eTJ4dDYxd2htdG1nMyJ9.RkRe_pnUD1Tc-b8Re7SWKw';

            //make ajax call to mapbox geocoding api
            $.ajax({
                url: directionsURL,
                method: 'GET',
                dataType: 'json'
            }).done(function(res) {
                console.log(res.features[0].center);
                return (res.features[0].center);
            });
        }

        console.log("YOU VOLUNTEERED");
        console.log(volunteer.first_name);
        console.log(volunteer.coord);

        $.post("/api/api-routes", volunteer);

    });

    $('#signIn').on('click', function(event) {
        event.preventDefault();
        var signIn = {
            username: $("#username").val().trim(),
            password: $("#password").val().trim()
        }

        $.post("/api/api-routes", signIn);
    });

    $('#addResuceMe').on('click', function(event) {
        event.preventDefault();
        var rescuee = {
            first_name: $("#first_name").val().trim(),
            last_name: $("#last_name").val().trim(),
            email: $("#email").val().trim(),
            password: $("#password").val().trim(),
            phoneNumber: $("#phoneNumber").val().trim(),
            address: $("#address").val().trim(),
            city: $("#city").val().trim(),
            state: $("#state option:selected").text()
        }

        $.post("/api/api-routes", rescuee);
    });




});

// addToCoordinates("6814 Ashland Terrace", "Texas", "Rosenberg")