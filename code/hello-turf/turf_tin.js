// call initMap()
initMap();

// generate some random point data
var points = turf.random('points', 30, {
  bbox: [-122.3, 37.77, -122.23,37.84]
});

// create a "z" value for each point
points.features.forEach(function(d){
    d.properties.z = ~~(Math.random() * 9);
});

// calculate a tin
var tin = turf.tin(points, 'z');

// add each triangle with the right color
tin.features.forEach(function(d){
    // create a hex color code from the z values the 3 triangle vertices
    d.properties.fill = '#' + d.properties.a +
    d.properties.b + d.properties.c;

    // add each triangle to the map
    L.geoJson(d, {color:d.properties.fill}).addTo(map);
});
