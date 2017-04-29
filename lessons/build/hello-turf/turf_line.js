// call initMap()
initMap();

// define coordinates for line
var latlngs = [
    [-122.266433, 37.78],
    [-122.29, 37.8],
    [-122.28, 37.82]
];
// add a marker to the map
var line = turf.lineString(latlngs);
L.geoJson(line, {color:"red"}).addTo(map);
