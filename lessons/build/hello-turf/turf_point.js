// call initMap()
initMap();

// add a marker to the map
var point = turf.point([-122.266433, 37.799289]);
L.geoJson(point).addTo(map);
