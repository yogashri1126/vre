
// Note: This example requires that you consent to location sharing when
// prompted by your browser. If you see the error "The Geolocation service
// failed.", it means you probably did not give permission for the browser to
// locate you.

var tempDistance = Infinity;
var distances = [];
var voltemps;
var iMin;
var maxLength = 0;
var map, infoWindow;

$(document).ready(function() {
  //var map, infoWindow;
  function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: -34.397, lng: 150.644},
      zoom: 10
    });
    infoWindow = new google.maps.InfoWindow;

    // Try HTML5 geolocation.
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        var pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };

        infoWindow.setPosition(pos);
        infoWindow.setContent("<h6>" + 'Found you' + "</h6>");
        infoWindow.open(map);
        map.setCenter(pos);
        map.setZoom(10);
      }, function() {
        handleLocationError(true, infoWindow, map.getCenter());
      });
    } else {
      // Browser doesn't support Geolocation
      handleLocationError(false, infoWindow, map.getCenter());
    }

    //add storm reports kml layer
    var ctaLayer = new google.maps.KmlLayer({
          url: 'http://www.spc.noaa.gov/climo/reports/today.kmz',
          map: map
        });

    // flood gauges forecasts kml layer
    // var ctbLayer = new google.maps.KmlLayer({
    //       url: 'http://water.weather.gov/ahps/worldfiles/ahps_national_fcst.kmz',
    //       map: map
    //     });

  }// end of initMap function

  function handleLocationError(browserHasGeolocation, infoWindow, pos) {
    infoWindow.setPosition(pos);
    infoWindow.setContent(browserHasGeolocation ?
                          'Error: The Geolocation service failed.' :
                          'Error: Your browser doesn\'t support geolocation.');
    infoWindow.open(map);
  }

  // implements googlemaps geocoding
  function addressToCoord(address) {
  	var add = address;
  	directionsURL = "https://maps.googleapis.com/maps/api/geocode/json?" +
  	"address="+ address + '&key=AIzaSyDu3vjrW3tNCVIuObw9ql3iqv8Iui3Seuw';

  	//make ajax call to mapbox geocoding api
  	$.ajax({
  			url: directionsURL,
  			method: 'GET',
  			dataType: 'json'
  	}).done(function(res) {
  			console.log(res.results[0].geometry.location);
  			myLatLng = res.results[0].geometry.location;
        map.setCenter(myLatLng);
        // new marker
        var marker = new google.maps.Marker({
          position: myLatLng,
          map: map,
          title: selectedVol.first_name + " "+ selectedVol.last_name
        });
        //
        // infoWindow.setPosition(myLatLng);
        // infoWindow.setContent("<h6>" + selectedVol.first_name + ' is here.' + "</h6>");
        //

        map.setZoom(10);
  	});
  }

  // include code to handle user Rescue me event
  function getDistance(volAddress, index)
  {
     //Find the distance
     var distanceService = new google.maps.DistanceMatrixService();
     distanceService.getDistanceMatrix({
        origins: [currentUser.address + ", " + currentUser.city + ", " + currentUser.state],
        destinations: [volAddress],
        travelMode: google.maps.TravelMode.WALKING,
        unitSystem: google.maps.UnitSystem.METRIC,
        durationInTraffic: true,
        avoidHighways: false,
        avoidTolls: false
    },
    function (response, status) {
        if (status !== google.maps.DistanceMatrixStatus.OK) {
            console.log('Error:', status);
        } else {
            //console.log(response);
            if (tempDistance > response.rows[0].elements[0].distance.value){
              tempDistance = response.rows[0].elements[0].distance.value;
              iMin = index;
            }
            distances[index] = response.rows[0].elements[0].distance.value;
            voltemps[index].distance = response.rows[0].elements[0].distance.value;
            if (index == maxLength-1){
              selectedVol = voltemps[iMin];
              console.log(selectedVol.first_name + " " +selectedVol.last_name +" is on the way");
              setTimeout(function(){$('#modal3').modal('close'); }, 3000);
              $("#inform-rescuee").text(selectedVol.first_name + " " +selectedVol.last_name + " is on the way!");
              setTimeout(function(){$('#modal_update').modal('open'); }, 3200);
              setTimeout(function(){
                addressToCoord(selectedVol.address + ", " + selectedVol.city + ", " + selectedVol.state + " "+ selectedVol.zip);
              }, 4000);

            }// end of if statement
        }
    });
  }

  //call the initMap function using the JQuery function
  var url = "https://maps.googleapis.com/maps/api/js?key=AIzaSyDu3vjrW3tNCVIuObw9ql3iqv8Iui3Seuw";
  $.getScript(url, initMap);

  // on click of rescue me button
  $("#navbtn").on("click", function(){
    // reset
    tempDistance = Infinity;
    iMin = 0;
    // Get list of all volunteers
    $("#inform-rescuee").empty();
    $.get("/api/api-routes/get-vols", function(res) {
      console.log(res);
    }).then(vols => {
      voltemps = vols.slice();
      maxLength = vols.length;

      for (var i = 0; i < vols.length; i++) {
        getDistance(vols[i].address + ", " + vols[i].city + ", " + vols[i].state, i);
      }
    });

  });// end of on click function

});// end of document.ready() function
