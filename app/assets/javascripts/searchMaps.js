

  function initAutocompvare() {
    var map2 = new google.maps.Map(document.getElementById('map2'), {
      center: {lat:-15.4954666, lng:-70.1416507},
      zoom: 13,
      mapTypeId: 'roadmap'
    });

    var input = document.getElementById('pac-input');
    var pacInputAutocompvare = document.getElementById('pac-input-autocompvare');


    var searchBox = new google.maps.places.SearchBox(input);
    map2.controls[google.maps.ControlPosition.TOP_CENTER].push(input);


    input.addEventListener('change', ()=>{
      var val = input.value
      pacInputAutocompvare.value = val
    })

    map2.addListener('bounds_changed', function() {
      searchBox.setBounds(map2.getBounds());
    });

    var markers = [];

    searchBox.addListener('places_changed', function() {
      var places = searchBox.getPlaces();

      if (places.length == 0) {
        return;
      }

      markers.forEach(function(marker) {
        marker.setMap(null);
      });
      markers = [];


      var bounds = new google.maps.LatLngBounds();
      places.forEach(function(place) {
        if (!place.geometry) {

          return;
        }
        var icon = {
          url: place.icon,
          size: new google.maps.Size(71, 71),
          origin: new google.maps.Point(0, 0),
          anchor: new google.maps.Point(17, 34),
          scaledSize: new google.maps.Size(25, 25)
        };


        markers.push(new google.maps.Marker({
          map: map2,
          icon: icon,
          title: place.name,
          position: place.geometry.location
        }));

        if (place.geometry.viewport) {

          bounds.union(place.geometry.viewport);
        } else {
          bounds.extend(place.geometry.location);
        }
      });
      map2.fitBounds(bounds);
    });


  }
