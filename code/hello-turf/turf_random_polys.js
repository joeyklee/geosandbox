initMap();

var polygons = turf.random('polygons', 50, {
  bbox: [-122.31, 37.85, -122.20,37.75],
  num_vertices: 6,
  max_radial_length: 0.005
});

L.geoJson(polygons).addTo(map);