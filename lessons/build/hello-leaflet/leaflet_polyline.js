// call initMap()
initMap();

// define line coordinates
var latlngs = [
    [37.799289, -122.266433],
    [37.8, -122.266433],
    [37.82, -122.266433]
];
// add the line to the map
L.polyline(latlngs, {color:"red"}).addTo(map);
