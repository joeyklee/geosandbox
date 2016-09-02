// call initMap()
initMap();

// define bounds: south-west, north-east
var bounds = [
    [37.799289, -122.266433],
    [37.82, -122.28],
];

// add the rectangle
L.rectangle(bounds, {color:"purple"}).addTo(map);
