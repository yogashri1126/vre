
      // Note: This example requires that you consent to location sharing when
      // prompted by your browser. If you see the error "The Geolocation service
      // failed.", it means you probably did not give permission for the browser to
      // locate you.
      var map, infoWindow;
        function initMap() {
        var map = new google.maps.Map(document.getElementById("map"), {
          zoom: 12,
          center: {lat: 29.7700, lng: -95.3700}
        });
        var geocoder = new google.maps.Geocoder();

        document.getElementById('submit').addEventListener('click', function() {
          geocodeAddress(geocoder, map);
        });
      }
      function geocodeAddress(geocoder, resultsMap) {
        var address = document.getElementById('address').value;
        geocoder.geocode({'address': address}, function(results, status) {
          if (status === 'OK') {
            resultsMap.setCenter(results[0].geometry.location);

            var marker = new google.maps.Marker({
              map: resultsMap,
              position: results[0].geometry.location
            });
        
          } else {
            alert('There are no results for this zip code. Please try a different zip code: ' + status);
          }
        });
      }