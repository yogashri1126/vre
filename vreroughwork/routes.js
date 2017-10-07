// function initialize(app, db) { 
//     //A GET request to /cops should return back the nearest cops in the vicinity.
//     app.get('/cops', function(req, res){
//     /*extract the latitude and longitude info from the request. Then, fetch the nearest cops using MongoDB's geospatial queries and return it back to the client.
//     */
//     });
// }
// exports.initialize = initialize;

// function fetchNearestCops(db, coordinates, callback) {
//     db.collection('policeData').createIndex({
//         "location": "2dsphere"
//     }, function() {
//         db.collection("policeData").find({
//             location: {
//                 $near: {
//                     $geometry: {
//                         type: "Point",
//                         coordinates: coordinates
//                     },
//                     $maxDistance: 2000
//                 }
//             }
//         }).toArray(function(err, results) {
//             if(err) {
//                 console.log(err)
//             }else {
//                 callback(results);
//             }
//         });
//     });
// }
// exports.fetchNearestCops = fetchNearestCops;

var dbOperations = require('./db-operations');
function initialize(app, db) {
    // '/cops?lat=12.9718915&&lng=77.64115449999997'
    app.get('/cops', function(req, res){
        //Convert the query strings into Numbers
        var latitude = Number(req.query.lat);
        var longitude = Number(req.query.lng);
        dbOperations.fetchNearestCops(db, [longitude,latitude], function(results){
        //return the results back to the client in the form of JSON
            res.json({
                cops: results
            });
        });  
    });
}
exports.initialize = initialize;