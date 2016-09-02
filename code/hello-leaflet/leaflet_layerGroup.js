initMap();

var layers = new L.layerGroup().addTo(map);

var point1 = L.marker([37.79, -122.26]).toGeoJSON();
var point2 = L.marker([37.77, -122.26]).toGeoJSON();

L.geoJson(point1).addTo(layers);
L.geoJson(point2).addTo(layers);

map.on("keypress", function(e) {
    var keyPressed = e.originalEvent.key;
    if (keyPressed == "x") {
        layers.clearLayers();
    }
});
