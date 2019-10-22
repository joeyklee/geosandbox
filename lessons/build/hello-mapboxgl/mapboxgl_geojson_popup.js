initMap();

map.on("load", function () {

  var point = turf.point([-122.266433, 37.799289], {
    description: "I'm a popup! Woo hoo!"
  });


  // Add a single point to the map
  map.addSource('point', {
    "type": "geojson",
    "data": point
  });

  map.addLayer({
    "id": "point",
    "type": "circle",
    "source": "point",
    "paint": {
      "circle-radius": 10,
      "circle-color": "#3887be"
    }
  });

  map.getSource('points')


  map.on('click', 'point', function (e) {
    var coordinates = e.features[0].geometry.coordinates.slice();
    var description = e.features[0].properties.description;

    new mapboxgl.Popup()
      .setLngLat(coordinates)
      .setHTML(description)
      .addTo(map);
  });
  
})