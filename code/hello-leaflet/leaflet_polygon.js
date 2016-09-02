// call initMap()
initMap();

// define polygon coordinates
var latlngs = [
    [37.799289, -122.266433],
    [37.8, -122.24],
    [37.82, -122.28],
    [37.785, -122.28]
];

// add the polygon to the map
L.polygon(latlngs, {color:"green"}).addTo(map);

