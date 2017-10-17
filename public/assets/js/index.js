
// Note: This example requires that you consent to location sharing when
// prompted by your browser. If you see the error "The Geolocation service
// failed.", it means you probably did not give permission for the browser to
// locate you.

// var tempDistance;
// var distances = [];
// $(document).ready(function() {
//   var map, infoWindow;
//   function initMap() {
//     map = new google.maps.Map(document.getElementById('map'), {
//       center: {lat: -34.397, lng: 150.644},
//       zoom: 6
//     });
//     infoWindow = new google.maps.InfoWindow;

//     // Try HTML5 geolocation.
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(function(position) {
//         var pos = {
//           lat: position.coords.latitude,
//           lng: position.coords.longitude
//         };

//         infoWindow.setPosition(pos);
//         infoWindow.setContent('Location found.');
//         infoWindow.open(map);
//         map.setCenter(pos);
//       }, function() {
//         handleLocationError(true, infoWindow, map.getCenter());
//       });
//     } else {
//       // Browser doesn't support Geolocation
//       handleLocationError(false, infoWindow, map.getCenter());
//     }

//     //add storm reports kml layer
//     var ctaLayer = new google.maps.KmlLayer({
//           url: 'http://www.spc.noaa.gov/climo/reports/today.kmz',
//           map: map
//         });

//     // flood gauges forecasts kml layer
//     var ctbLayer = new google.maps.KmlLayer({
//           url: 'http://water.weather.gov/ahps/worldfiles/ahps_national_fcst.kmz',
//           map: map
//         });

//   }// end of initMap function

//   function handleLocationError(browserHasGeolocation, infoWindow, pos) {
//     infoWindow.setPosition(pos);
//     infoWindow.setContent(browserHasGeolocation ?
//                           'Error: The Geolocation service failed.' :
//                           'Error: Your browser doesn\'t support geolocation.');
//     infoWindow.open(map);
//   }

//   // include code to handle user Rescue me event
//   function getDistance(volAddress, index)
//   {
//      //Find the distance
//      var distanceService = new google.maps.DistanceMatrixService();
//      distanceService.getDistanceMatrix({
//         origins: [currentUser.address + ", " + currentUser.city + ", " + currentUser.state],
//         destinations: [volAddress],
//         travelMode: google.maps.TravelMode.WALKING,
//         unitSystem: google.maps.UnitSystem.METRIC,
//         durationInTraffic: true,
//         avoidHighways: false,
//         avoidTolls: false
//     },
//     function (response, status) {
//         if (status !== google.maps.DistanceMatrixStatus.OK) {
//             console.log('Error:', status);
//         } else {
//             console.log(response);
//             tempDistance = response.rows[0].elements[0].distance.value;
//             //distances.push(tempDistance);
//             distances[index] = tempDistance;
//         }
//     });
//   }



//   //call the initMap function using the JQuery function
//   var url = "https://maps.googleapis.com/maps/api/js?key=AIzaSyDu3vjrW3tNCVIuObw9ql3iqv8Iui3Seuw";
//   $.getScript(url, initMap);

//   // on click of rescue me button
//   $("#navbtn").on("click", function(){
//     // Get list of all volunteers
//     //var temps= [];
//     $.get("/api/api-routes/get-vols", function(res) {
//       console.log(res);
//     }).then(vols => {
//       // loop through volunteers and get necessary properties
//       // reset the distances variable
//       // initialize distances
//       for (let i = 0; i < vols.length; i++) {
//         distances.push(0);
//       }
//       //var service = new google.maps.DistanceMatrixService();
//       // need for a closure here in order to make ajax call inside for loop
//       for (let i = 0; i < vols.length; i++) {
//         (function(i){
//           // make ajax call to get distances
//           getDistance(vols[i].address + ", " + vols[i].city + ", " + vols[i].state, i);
//           // distances.push(tempDistance)
//           //distances[i] = tempDistance;
//         })(i);
//       }
//       //loop through distances and get the smallest
//       //console.log(distances);
//       // var iMin = distances.indexOf(Math.min(Math, distances));
//       // selectedVol = vols[iMin];
//       // console.log(selectedVol.first_name + " " +selectedVol.last_name +" is on the way");

//     });
//     //temps = distances.slice();
//     console.log(typeof distances);
//     console.log(distances);
//     console.log(distances[0]);
//   });// end of on click function
// });// end of document.ready() function
