initMap();

var OpenStreetMap_DE = L.tileLayer('http://{s}.tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png', {
    maxZoom: 18,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
});

var Stamen_TonerLite = L.tileLayer('http://stamen-tiles-{s}.a.ssl.fastly.net/toner-lite/{z}/{x}/{y}.{ext}', {
    attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    subdomains: 'abcd',
    minZoom: 0,
    maxZoom: 20,
    ext: 'png'
});


var redCircle = new L.layerGroup();
var blueCircle = new L.layerGroup();
var greenCircle = new L.layerGroup();
var purpCircle = new L.layerGroup();

L.circle([37.795, -122.26], 500, {color:"red"}).addTo(redCircle);
L.circle([37.79, -122.26], 500, {color:"blue"}).addTo(blueCircle);
L.circle([37.785, -122.26], 500, {color:"green"}).addTo(greenCircle);
L.circle([37.78, -122.26], 500, {color:"purple"}).addTo(purpCircle);


var toggleMaps = {
    "OSM DE": OpenStreetMap_DE,
    "Stamen Toner Lite": Stamen_TonerLite
}

var overlayMaps = {
    "red": redCircle,
    "blue": blueCircle,
    "green": greenCircle,
    "purple": purpCircle
};

L.control.layers(toggleMaps, overlayMaps).addTo(map);
