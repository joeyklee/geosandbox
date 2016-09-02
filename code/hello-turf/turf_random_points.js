initMap();

var points = turf.random('points', 100, {
  bbox: [-122.31, 37.85, -122.20,37.75]
});

L.geoJson(points).addTo(map);

points.features.forEach(function(feat) {
  var lat = feat.geometry.coordinates[1];
  var lng = feat.geometry.coordinates[0];
  L.circle([lat,lng], 200).addTo(map);
});
